import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    commonjs.default(),
    vue()
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
