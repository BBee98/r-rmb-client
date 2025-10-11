import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@forms": path.resolve(__dirname, "./src/features/Forms"),
      "@shared/hooks": path.resolve(__dirname, "./src/shared/Hooks")
    }
  }
})
