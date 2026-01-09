import torch
import torch.nn as nn
from transformers import GemmaConfig, GemmaForCausalLM
import os
import json

# CONFIGURATION
with open("./web/src/config.json", "r") as f:
    CONF = json.load(f)

TEXT_FILE = "poem.txt"
MODEL_PATH = "model.onnx"
SEQ_LEN = CONF["seqLen"]
CHARS = CONF["chars"]
VOCAB_SIZE = len(CHARS) + 1

# Training Hyperparameters
BATCH_SIZE = 64
STEPS = 1000
LEARNING_RATE = 3e-4

# MODEL DEFINITION

print(">>> Initializing")

config = GemmaConfig(
    vocab_size=VOCAB_SIZE,
    hidden_size=CONF["hiddenSize"],
    intermediate_size=CONF["intermediateSize"],
    num_hidden_layers=CONF["numLayers"],
    num_attention_heads=CONF["numHeads"],
    num_key_value_heads=CONF["numHeads"],
    max_position_embeddings=512,
    hidden_act="gelu",
    attn_implementation="eager"
)

model = GemmaForCausalLM(config)
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"   Using device: {device}")
model.to(device)
print(f"   Parameters: {sum(p.numel() for p in model.parameters())/1e6:.2f}M")


# DATA LOADING

if not os.path.exists(TEXT_FILE):
    print(f"❌ Error: {TEXT_FILE} not found. Please create it first.")
    exit(1)

with open(TEXT_FILE, 'r', encoding='utf-8') as f:
    text = f.read()

char_to_id = {c: i for i, c in enumerate(CHARS)}
id_to_char = {i: c for i, c in enumerate(CHARS)}

data_ids = [char_to_id.get(c, VOCAB_SIZE-1) for c in text]
data_tensor = torch.tensor(data_ids, dtype=torch.long)


def get_batch():
    max_idx = len(data_tensor) - SEQ_LEN
    if max_idx <= 0:
        print("❌ Text is too short for the sequence length!")
        exit(1)

    ix = torch.randint(0, max_idx, (BATCH_SIZE,))
    x = torch.stack([data_tensor[i:i+SEQ_LEN] for i in ix]).to(device)
    y = x.clone()  # Targets = Original Text

    # LOGIC: Corruption Strategy
    # Even for Causal LM, we can train it to "recover" correct text from noise
    # (given past context).
    mask = torch.rand(x.shape).to(device) < 0.15
    noise = torch.randint(0, VOCAB_SIZE, x.shape).to(device)
    x[mask] = noise[mask]

    return x, y

# TRAINING LOOP


optimizer = torch.optim.AdamW(model.parameters(), lr=LEARNING_RATE)
model.train()

print(f">>> Starting training for {STEPS} steps...")
for i in range(STEPS):
    x, y = get_batch()
    outputs = model(input_ids=x, labels=y)
    loss = outputs.loss

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    if i % 50 == 0:
        print(f"   Step {i:4d} | Loss: {loss.item():.4f}")

# EXPORT TO ONNX

print(f">>> Exporting to {MODEL_PATH}...")
model.eval()
dummy_input = torch.zeros(1, SEQ_LEN, dtype=torch.long).to(device)

try:
    # Causal LM usually returns logits.
    # Note: On the web side, we must handle the causal shift!
    torch.onnx.export(
        model,
        dummy_input,
        MODEL_PATH,
        input_names=['input_ids'],
        output_names=['logits'],
        dynamic_axes={'input_ids': {0: 'batch'}, 'logits': {0: 'batch'}}
    )
    print("✅ Done!")
except Exception as e:
    print(f"❌ Export failed: {e}")
