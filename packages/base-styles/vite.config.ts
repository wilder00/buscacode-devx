import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vanillaExtractPlugin(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    }
  },
  test: {
    globals: true,
    environment: 'node'
  }
})
