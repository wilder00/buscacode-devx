import { default as react } from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true
    })
  ],
  build: {
    minify: true, // ⬅️ DESACTIVA MINIFICACIÓN
    sourcemap: false, // ⬅️ Genera sourcemaps legibles
    cssMinify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
          //'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['@testing-library/jest-dom']
  }
})
