import clsx, { type ClassValue } from 'clsx'
import { extendTailwindMerge, twMerge } from 'tailwind-merge'
import defaultConfig from 'tailwindcss/defaultConfig'
import resolveConfig from 'tailwindcss/resolveConfig'

const {
  theme: { colors, fontSize }
} = resolveConfig(defaultConfig)

const textColorClasses = Object.getOwnPropertyNames(colors).map(
  (color) => `text-${color}`
)
const fontSizeClasses = Object.getOwnPropertyNames(fontSize).map(
  (size) => `text-${size}`
)

export const twCn = (...classValue: ClassValue[]) => {
  const twMerge = extendTailwindMerge({
    override: {
      classGroups: {
        'text-color': textColorClasses,
        'font-size': fontSizeClasses
      }
    }
  })
  return twMerge(clsx(classValue))
}

export const cn = (...classValue: ClassValue[]) => twMerge(clsx(classValue))
