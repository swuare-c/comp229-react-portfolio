// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // Set your frontend dev server port
  },
  build: {
    outDir: 'dist', // Correct place for build output
  },
})
