/** @type {import('tailwindcss').Config} */

import { defaultConfig } from '@buscacode/tailwind-base'

const config = {
  presets: [defaultConfig],
  content: [
    './src/**/*.{ts,tsx}',
    './docs/**/*.{md,mdx}',
    './packages/**/src/*.{ts,tsx}',
    {
      exclude: ['./packages/**/node_modules/**/*']
    }
  ],
  darkMode: ['[data-theme="dark"]'],
  /* corePlugins: {
    preflight: false,
    container: false
  }, */
  theme: {
    extend: {}
  },
  plugins: []
}

export default config
