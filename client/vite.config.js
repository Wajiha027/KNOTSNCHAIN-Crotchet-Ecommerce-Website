import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  server: {
    port: 8080,
    host: true
  },
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
    css: {
      postcss: './postcss.config.js'
    },
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})