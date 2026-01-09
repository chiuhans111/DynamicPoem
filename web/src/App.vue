<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { NanoPoet } from "./NanoPoet";
import typeSoundUrl from "./assets/type.mp3";

const poet = new NanoPoet();
const input = ref("");

const isFinished = ref(false);

const status = ref("Initializing...");

const audio = new Audio(typeSoundUrl);
audio.volume = 0.4;
audio.preservesPitch = false;

// Sound State
let updatesInFrame = 0;
let lastSoundTime = 0;
const SOUND_COOLDOWN = 30; // ms

const triggerSound = () => {
  const now = Date.now();
  // Only play if we have updates AND cooldown has passed
  if (updatesInFrame > 0 && now - lastSoundTime > SOUND_COOLDOWN) {
    // Calculate volume based on activity (clamped)
    // Base 0.2, add 0.05 per update, max 0.8
    const intensity = Math.min(1.0, updatesInFrame * 1e-2);

    // Add jitter: +/- 0.1
    const jitter = Math.random() * 0.2 + 0.8;
    const finalVolume = intensity * jitter;

    audio.volume = finalVolume;

    // Randomize Pitch (playbackRate): 0.8 to 1.2
    audio.playbackRate = 0.98 + Math.random() * 0.04;

    // Reset and play
    audio.currentTime = 0;
    // if (audio.paused) audio.play().catch(() => {});

    lastSoundTime = now + Math.random() * 10;
    updatesInFrame = 0; // Reset accumulator
  }
};

const width = 40;
const height = 20;

const N = width * height;

let text = "#".repeat(N);
const life = ref(new Array(N).fill(0));
const margin = 6;
const M = poet.seqLen - margin;

let index0 = 0;

const loop = async () => {
  try {
    // update life
    for (let i = 0; i < N; i++) {
      let accumulation = 0.01;
      if (i > 0) accumulation += (life.value[i - 1] - life.value[i]) * 0.1;
      if (i < N - 1) accumulation += (life.value[i + 1] - life.value[i]) * 0.1;
      life.value[i] += accumulation;
    }

    // when life is above a threshold, corresponding text will be replace with '#'
    let new_text = "";
    for (let i = 0; i < N; i++) {
      if (life.value[i] > 1) {
        life.value[i] = 1;
      }
      if (Math.random() > life.value[i] + 1 - 0.1) {
        new_text += "#";
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

    if (maxValue == 0) {
      maxIndex = index0;
      index0 += 5;
      if (index0 > N - M) index0 = 0;
      if (index0 < 0) index0 = N - M;
    }

    let maxIndex0 = maxIndex - margin;
    let prefix = "";

    while (maxIndex0 < 0) {
      maxIndex0++;
      prefix += " ";
    }

    let subsequence = prefix + new_text.slice(maxIndex0, maxIndex + M);

    while (subsequence.length < poet.seqLen) {
      subsequence += " ";
    }

    const result = (await poet.predict(subsequence)).slice(margin, margin + M);

    maxIndex = Math.max(0, Math.min(maxIndex, text.length - M));
    let replacement = "";
    for (let i = 0; i < M; i++) {
      if (subsequence[i + margin] !== "#" && Math.random() < 0.5) {
        replacement += text[maxIndex + i];
        continue;
      }

      if (result[i] !== "#") {
        replacement += result[i];
        if (result[i] !== text[maxIndex + i]) {
          life.value[maxIndex + i] = 0;
          updatesInFrame++;
        }
      } else {
        replacement += text[maxIndex + i];
      }
    }

    triggerSound();

    text = text.slice(0, maxIndex) + replacement + text.slice(maxIndex + M);

    input.value = text;
  } catch (e) {
    status.value = "Inference Error: " + e.message;
  }

  // Schedule next iteration
  if (!isFinished.value) setTimeout(loop, 0);
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
    <div class="poem-grid">
      <div v-for="i in height" :key="i" class="row">
        <span
          @mouseover="life[(i - 1) * width + (j - 1)] = -1"
          @touchstart="life[(i - 1) * width + (j - 1)] = -1"
          @touchmove.prevent="
            (e) => {
              const el = document.elementFromPoint(
                e.touches[0].clientX,
                e.touches[0].clientY
              );
              if (el?.dataset?.index) life[el.dataset.index] = 0;
            }
          "
          :data-index="(i - 1) * width + (j - 1)"
          v-for="j in width"
          :key="j"
          class="char"
          :style="{ opacity: life[(i - 1) * width + (j - 1)] + 0.1 }"
        >
          {{ input[(i - 1) * width + (j - 1)] }}
        </span>
      </div>
    </div>

    <br />
    <div class="status" :class="{ error: status.startsWith('Error') }">
      Status: {{ status }}
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  font-family: monospace;
  font-size: 15px;
  margin-top: 5%;
}

h1 {
  text-align: center;
  color: #3586d6;
}

.status {
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
  font-size: 6px;
}

.status.error {
  color: #e74c3c;
}

.row {
  display: flex;
}

.char {
  display: block;
  width: 10px;
  height: 20px;
  color: white;
}
</style>
