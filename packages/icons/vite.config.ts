import { default as react } from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      include: ['src/index.ts', 'src/iconMaps.ts', 'src/components']
    })
  ],
  build: {
    minify: true,
    sourcemap: false,
    cssMinify: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        iconMaps: resolve(__dirname, 'src/iconMaps.ts')
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`
      //fileName: 'index'
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
