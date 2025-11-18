import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components-form': path.resolve(__dirname, 'src/components/Form'),
      '@components-form/*': path.resolve(__dirname, 'src/components/Form/*'),
      '@features-form': path.resolve(__dirname, 'src/features/Form'),
      '@features-form/*': path.resolve(__dirname, 'src/features/Form/*'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@shared/*': path.resolve(__dirname, 'src/shared/*'),
      '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
      '@hooks/*': path.resolve(__dirname, 'src/shared/hooks/*'),
    }

  }
})
