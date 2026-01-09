<script setup>
import { ref, onMounted } from 'vue';
import { NanoPoet } from './NanoPoet';

const poet = new NanoPoet();
const status = ref('Initializing...');
const isReady = ref(false);
const input = ref('the world is ');
const output = ref('');
const isRunning = ref(false);

onMounted(async () => {
  try {
    await poet.init();
    status.value = 'Ready';
    isReady.value = true;
  } catch (e) {
    status.value = 'Error: ' + e.message;
  }
});

const runInference = async () => {
  if (!isReady.value) return;
  
  isRunning.value = true;
  output.value = 'Thinking...';
  
  try {
    const result = await poet.predict(input.value);
    output.value = result;
  } catch (e) {
    output.value = 'Error: ' + e.message;
  } finally {
    isRunning.value = false;
  }
};
</script>

<template>
  <div class="container">
    <h1>NanoPoet (Vue Edition)</h1>
    <div class="status" :class="{ error: status.startsWith('Error') }">
      Status: {{ status }}
    </div>

    <div class="card">
      <label>Prompt</label>
      <textarea v-model="input" placeholder="Type your text here..."></textarea>
      
      <button @click="runInference" :disabled="!isReady || isRunning">
        {{ isRunning ? 'Processing...' : 'Complete / Repair' }}
      </button>
    </div>

    <div class="card output-card" v-if="output">
      <label>Model Generation</label>
      <div class="output-text">{{ output }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Courier New', Courier, monospace;
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

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
  color: #7f8c8d;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 1rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
}

button {
  background: #2c3e50;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover:not(:disabled) {
  background: #34495e;
}

button:disabled {
  background: #95a5a6;
  cursor: not-allowed;
}

.output-text {
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #2c3e50;
}
</style>
