<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { NanoPoet } from "./NanoPoet";

const poet = new NanoPoet();
const input = ref("");

const isFinished = ref(false);

const status = ref("Initializing...");

const width = 20;
const height = 10;

const N = width * height;

let text = "#".repeat(N);
const life = ref(new Array(N).fill(0));
const margin = 1;
const M = poet.seqLen - margin * 2;

const loop = async () => {
  try {
    // update life
    for (let i = 0; i < N; i++) {
      life.value[i] += 0.1;
    }

    // when life is above a threshold, corresponding text will be replace with '#'
    let new_text = "";
    for (let i = 0; i < N; i++) {
      if (life.value[i] > 1 && Math.random() < 0.01) {
        new_text += "#";
        life.value[i] = 0;
      } else {
        new_text += text[i];
      }
    }

    // find subsequence length = poet.seqLen contains the most '#' and process that part

    let count = 0;
    let maxIndex = 0;
    let maxValue = -1;

    for (let i = 0; i < N; i++) {
      if (new_text[i] === "#") count++;
      if (i >= M && new_text[i - M] === "#") count--;
      if (i >= M - 1 && count > maxValue) {
        maxValue = count;
        maxIndex = i - M + 1;
      }
    }

    maxIndex += Math.round(Math.random() * 10) - 5;

    let maxIndex0 = maxIndex - margin;

    let prefix = "";

    while (maxIndex0 < 0) {
      maxIndex0++;
      prefix += " ";
    }

    let subsequence = prefix + new_text.slice(maxIndex0, maxIndex + M + margin);

    while (subsequence.length < M + margin * 2) {
      subsequence += " ";
    }

    const result = (await poet.predict(subsequence)).slice(margin, margin + M);

    maxIndex = Math.max(0, Math.min(maxIndex, text.length - M));
    let replacement = "";
    for (let i = 0; i < M; i++) {
      if (subsequence[margin + i] === "#" && result[i] !== "#") {
        replacement += result[i];
      } else {
        replacement += text[maxIndex + i];
      }
    }

    text = text.slice(0, maxIndex) + replacement + text.slice(maxIndex + M);

    input.value = text;
  } catch (e) {
    status.value = "Inference Error: " + e.message;
  }

  // Schedule next iteration
  if (!isFinished.value) setTimeout(loop, 10);
};

onMounted(async () => {
  try {
    await poet.init();
    status.value = "Ready";
    loop();
  } catch (e) {
    status.value = "Error: " + e.message;
  }
});

onBeforeUnmount(() => {
  isFinished.value = true;
});
</script>

<template>
  <div class="container">
    <h1>Nano Poem</h1>
    <div class="status" :class="{ error: status.startsWith('Error') }">
      Status: {{ status }}
    </div>

    <div class="poem-grid">
      <div v-for="i in height" :key="i" class="row">
        <span
          v-for="j in width"
          :key="j"
          class="char"
          :style="{ opacity: life[(i - 1) * width + (j - 1)] + 0.1 }"
        >
          {{ input[(i - 1) * width + (j - 1)] }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Courier New", Courier, monospace;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

.status {
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
}

.status.error {
  color: #e74c3c;
}

.char {
  display: inline-block;
  width: 10px;
  height: 10px;
  color: white;
}
</style>
