import { Config } from 'tailwindcss'
import { tailwindHeight } from './tailwind-height'

export const defaultConfig: Config = {
  content: [],

  theme: {
    extend: {
      height: {}
    }
  },
  plugins: [tailwindHeight]
}
