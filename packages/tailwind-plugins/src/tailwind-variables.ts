import { baseColors } from './constants'
import { type ColorIntensity } from './index.types'

/**
 * 1. Genera las variables CSS para :root
 * Ejemplo: --bc-color-primary: #hex; o --bc-color-gray-500: #hex;
 */
const generateCssVariables = (): Record<string, Record<string, string>> => {
  const variables: Record<string, string> = Object.fromEntries(
    Object.keys(baseColors).reduce((list, colorKey) => {
      const value = baseColors[colorKey as keyof typeof baseColors]
      if (typeof value === 'string') {
        list.push([`--bc-color-${colorKey}`, value])
        return list
      }

      Object.keys(value).forEach((intensityKey) => {
        const intensity = value[intensityKey as keyof typeof value]
        if (intensityKey === 'DEFAULT')
          list.push([`--bc-color-${colorKey}`, intensity])
        else list.push([`--bc-color-${colorKey}-${intensityKey}`, intensity])
      })
      return list
    }, [] as string[][])
  )

  // En v4, añadimos estas variables directamente al CSS base
  return {
    ':root': { ...variables }
  }
}

/**
 * 2. Genera la configuración de colores para extender el tema
 * Ejemplo: 'bc-primary': '#hex' o 'bc-gray': { '500': '#hex', 'DEFAULT': '#hex' }
 */
export const colorsBase = Object.fromEntries(
  Object.keys(baseColors).reduce(
    (list, colorKey) => {
      const key1 = colorKey as keyof typeof baseColors
      const value = baseColors[key1]
      if (typeof value === 'string') {
        list.push([`bc-${key1}`, value])
        return list
      }

      const colorVariants: Record<ColorIntensity | string, string> = {}
      Object.keys(value).forEach((intensityKey) => {
        const key2 = intensityKey as keyof typeof value
        colorVariants[key2] = value[key2]
      })
      list.push([`bc-${key1}`, colorVariants])
      return list
    },
    [] as Array<[string, string | Record<string, string>]>
  )
)

// --- Nuevo Patrón de Configuración/Plugin para v4 ---

/**
 * Exporta la función que devuelve la configuración completa
 * (CSS base para variables + extensión de colores).
 * Este es el "plugin as config" de Tailwind CSS v4.
 */
export const basePluginConfig = () => {
  return {
    // 1. Añade las variables CSS a la capa `base`
    css: {
      base: generateCssVariables()
    },

    // 2. Extiende los colores del tema
    theme: {
      extend: {
        colors: colorsBase
      }
    }
  }
}

// Ejemplo de cómo se usaría en `tailwind.config.ts`:
// import { basePluginConfig } from './ruta/al/archivo'
//
// export default {
//   plugins: [basePluginConfig()],
//   // ...resto de la config
// }
