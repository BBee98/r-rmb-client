# 🔗 Crear alias en vite

> 🥳 Utilizar alias en vite nos permite tener una lectura más rápida y ligera de los imports.

Para añadir aliases en nuestro repositorio que nos permita tener `imports` necesitamos tocar **dos ficheros en concreto**:

``tsconfig.app.json`` y ``vite.config.ts``.

Existe una propiedad en ambos ficheros llamado `alias`, que nos permite hacer esta configuración:

## Comparación de configuración de aliases

### 🦄 ``tsconfig.app.json``

```json
{
  "compilerOptions": {
    ...,
    "paths": {
      "@components-form": ["src/components/Form"],
      "@components-form/*": ["src/components/Form/*"],
      "@features-form": ["src/features/Form"],
      "@features-form/*": ["src/features/Form/*"],
      "@shared": ["src/shared"],
      "@shared/*": ["src/shared/*"],
      "@hooks": ["src/shared/hooks"],
      "@hooks/*": ["src/shared/hooks/*"]
    }
  },
}

```

### ⚙️ ``vite.config.js``

````ts
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
````