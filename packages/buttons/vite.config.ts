import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(/* {
      //identifiers: ({ hash }) => `bc_${hash}`
    } */),
    dts({ rollupTypes: true })
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: './src/style.css', // your original file path
    //       dest: '.' // relative to `dist/`
    //     }
    //   ]
    // })
  ],
  build: {
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
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['@testing-library/jest-dom/vitest']
  }
})
