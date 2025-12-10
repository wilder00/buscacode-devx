import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    iconMaps: 'src/iconMaps.ts'
  },
  format: ['esm', 'cjs'],
  outDir: 'dist',
  clean: true,
  splitting: false,
  treeshake: true,
  tsconfig: './tsconfig.json',

  // IMPORTANTE
  external: ['react', 'react-dom'],

  // TIPOS CORRECTOS PARA MULTI-ENTRY
  dts: {
    entry: {
      index: 'src/index.ts',
      iconMaps: 'src/iconMaps.ts'
    }
  }
})
