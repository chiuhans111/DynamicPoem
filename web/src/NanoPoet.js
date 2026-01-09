import * as ort from 'onnxruntime-web';
import config from '../../config.json';

export class NanoPoet {
    constructor() {
        this.session = null;
        this.config = config;

        // Initialize Logic immediately (synchronous part)
        this.chars = this.config.chars;
        this.vocabSize = this.chars.length + 1;
        this.seqLen = this.config.seqLen;
        this.unkId = this.chars.length;

        this.charToId = {};
        this.idToChar = {};

        // Build Maps
        [...this.chars].forEach((c, i) => {
            this.charToId[c] = i;
            this.idToChar[i] = c;
        });
        this.idToChar[this.unkId] = "#";
    }

    async init() {
        // Load Model (Still needs to be async for ONNX)
        try {
            // Configure WASM paths to root (where vite-plugin-static-copy puts them)
            ort.env.wasm.wasmPaths = "/";

            // Import model path (handled by Vite assetsInclude)
            const modelUrl = (await import('../../model.onnx')).default;
            console.log("Loading model from:", modelUrl);

            this.session = await ort.InferenceSession.create(modelUrl, {
                executionProviders: ['wasm']
            });
        } catch (e) {
            console.error("Failed to load model.onnx:", e);
            throw new Error(`Could not load ONNX model: ${e.message}`);
        }

        return true;
    }

    async predict(inputText) {
        if (!this.session) throw new Error("Poet not initialized");

        const seqLen = this.seqLen;

        // 1. Tokenize
        const ids = new Int32Array(seqLen).fill(this.unkId);
        for (let i = 0; i < Math.min(inputText.length, seqLen); i++) {
            const char = inputText[i];
            ids[i] = this.charToId[char] !== undefined ? this.charToId[char] : this.unkId;
        }

        // 2. Inference
        const bigIntIds = BigInt64Array.from(ids, x => BigInt(x));
        const tensor = new ort.Tensor('int64', bigIntIds, [1, seqLen]);

        const results = await this.session.run({ input_ids: tensor });
        const logits = results.logits.data;

        // 3. Decode
        let outputText = "";

        for (let i = 0; i < seqLen; i++) {
            if (i === 0) {
                outputText += this.idToChar[ids[i]] || "";
                continue;
            }

            const logitsIdx = (i - 1) * this.vocabSize;
            let maxVal = -Infinity;
            let bestId = 0;

            for (let v = 0; v < this.vocabSize; v++) {
                const val = logits[logitsIdx + v];
                if (val > maxVal) {
                    maxVal = val;
                    bestId = v;
                }
            }

            outputText += this.idToChar[bestId] || "";
        }

        return outputText;
    }
}
