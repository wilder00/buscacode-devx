import plugin from 'tailwindcss/plugin'
import type { PluginCreator } from 'tailwindcss/types/config'
import { baseColors } from './constants'
import { type ColorIntensity } from './index.types'

const defineVariables: PluginCreator = ({ addBase }) => {
  const variables: Record<string, string> = Object.fromEntries(
    Object.keys(baseColors).reduce((list, colorKey) => {
      const value = baseColors[colorKey as keyof typeof baseColors]
      if (typeof value === 'string') {
        list.push([`--bc-color-${colorKey}`, value])
        return list
      }

      Object.keys(value).forEach((intensityKey) => {
        const key = intensityKey as keyof typeof value
        const intensity = value[key]
        if (key === 'DEFAULT') list.push([`--bc-color-${colorKey}`, intensity])
        else list.push([`--bc-color-${colorKey}-${intensityKey}`, intensity])
      })
      return list
    }, [] as string[][])
  )

  addBase({
    ':root': { ...variables }
  })
}

export const colorsBase = Object.fromEntries(
  Object.keys(baseColors).reduce(
    (list, colorKey) => {
      const key1 = colorKey as keyof typeof baseColors
      const value = baseColors[key1]
      if (typeof value === 'string') {
        list.push([`bc-${key1}`, `var(--bc-color-${colorKey}, ${value})`])
        return list
      }

      const colorVariants: Record<ColorIntensity | string, string> = {}
      Object.keys(value).forEach((intensityKey) => {
        const key2 = intensityKey as keyof typeof value
        colorVariants[key2] =
          `var(--bc-color-${colorKey}-${intensityKey}, ${value[key2]})`
      })
      list.push([`bc-${key1}`, colorVariants])
      return list
    },
    [] as Array<[string, string | Record<string, string>]>
  )
)

const addBaseConfig = () => {
  return {
    theme: {
      extend: {
        colors: colorsBase
      }
    }
  }
}

export const variables = () => plugin(defineVariables, addBaseConfig())
