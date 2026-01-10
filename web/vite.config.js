import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensure relative paths for GH Pages
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/onnxruntime-web/dist/*.{wasm,mjs}',
          dest: 'assets'
        }
      ]
    })
  ],
  assetsInclude: ['**/*.onnx']
})
