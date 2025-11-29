import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  test: {
    environment: 'node',
    globals: false,
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov', 'json', 'html', 'text'],
      //reporter: ['lcov', 'json'],
      exclude: [
        ...configDefaults.exclude,
        '**/*.{mjs,cjs}',
        '**/dist/**',
        '**/__test__/**',
        '**/node_modules/**'
      ],
      include: ['packages/**/*.{ts,js,tsx,jsx}']
    },
    projects: ['packages/*'] // in before versions it was workspace in a separated file
  }
})
