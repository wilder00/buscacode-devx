import { variables } from '@buscacode/tailwind-plugins'
import type { Config } from 'tailwindcss'
import resolveConfig from 'tailwindcss/resolveConfig'

export const defaultConfig: Partial<Config> = {
  content: [],
  theme: {
    extend: {}
  },
  plugins: [variables()]
}

export const computedDefaultConfig = resolveConfig(defaultConfig as Config)
