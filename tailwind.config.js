/** @type {import('tailwindcss').Config} */

import starlightPlugin from '@astrojs/starlight-tailwind'
import { computedDefaultConfig } from '@buscacode/tailwind-base'
import colors from 'tailwindcss/colors'

const config = {
  presets: [computedDefaultConfig],
  relative: true,
  content: [
    './packages/**/src/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '!./**/node_modules/**',
    '!./node_modules/**/*'
  ],
  darkMode: ['class', '[data-theme="dark"]'],

  /* corePlugins: {
    preflight: false,
    container: false
  }, */
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.indigo,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.zinc
      },
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"', '"Inter"', '"sans - serif"']
      }
    }
  },
  plugins: [starlightPlugin()]
}

export default config
