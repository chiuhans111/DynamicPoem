import torch

from transformers import GemmaConfig, GemmaModel

import os
import json
import re
import random

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
STEPS = 4000
LEARNING_RATE = 1e-4

# MODEL DEFINITION


class BidirectionalGemma(nn.Module):
    def __init__(self, config):
        super().__init__()
        # 1. Enable Bidirectional Attention in Config
        config.use_bidirectional_attention = True

        # 2. Base Transformer (The "Brain")
        # We use GemmaModel instead of GemmaForCausalLM because we want
        # to control the attention mask (allow it to see future tokens).
        self.gemma = GemmaModel(config)

        # 3. Output Head (The "Mouth")
        # Since GemmaModel only gives us hidden vectors, we need this layer
        # to convert them back into probabilities for our characters.
        self.head = nn.Linear(config.hidden_size,
                              config.vocab_size, bias=False)

    def forward(self, input_ids, labels=None):
        # Run the transformer
        outputs = self.gemma(input_ids=input_ids)
        hidden_states = outputs.last_hidden_state

        # Project to vocab size
        logits = self.head(hidden_states)

        loss = None
        if labels is not None:
            # Standard CrossEntropyLoss for token prediction
            loss_fct = nn.CrossEntropyLoss()
            # Flatten predictions and targets for loss calculation
            loss = loss_fct(logits.view(-1, config.vocab_size),
                            labels.view(-1))

        # Return a namespace object similar to what HF models return,
        # so the rest of your code works seamlessly.
        from transformers.modeling_outputs import CausalLMOutput
        return CausalLMOutput(
            loss=loss,
            logits=logits,
            hidden_states=outputs.hidden_states,
            attentions=outputs.attentions
        )


print(">>> Initializing Bidirectional Gemma")

config = GemmaConfig(
    vocab_size=VOCAB_SIZE,
    hidden_size=CONF["hiddenSize"],
    intermediate_size=CONF["intermediateSize"],
    num_hidden_layers=CONF["numLayers"],
    num_attention_heads=CONF["numHeads"],
    num_key_value_heads=CONF["numHeads"],
    max_position_embeddings=512,
    hidden_act="gelu",
    attn_implementation="eager"  # Eager attention is often simpler for custom masks
)

model = BidirectionalGemma(config)
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

filtered_text = ""

for c in text:
    if c in CHARS:
        filtered_text += c
    else:
        filtered_text += " "
text = re.sub(" +", " ", filtered_text)


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
    mask1 = torch.rand(x.shape).to(device) < random.random()*0.2
    mask2 = torch.rand(x.shape).to(device) < 0.5
    noise = torch.randint(0, VOCAB_SIZE, x.shape).to(device)
    noise[mask2] = VOCAB_SIZE-1
    x[mask1] = noise[mask1]

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

    if i % 100 == 0:
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
