import clsx, { type ClassValue } from 'clsx'
import { extendTailwindMerge, twMerge } from 'tailwind-merge'
export type { Config, ConfigExtension } from 'tailwind-merge'

/**
 * Extiende la configuración de `tailwind-merge` y produce una función `cn`
 * que combina clases usando `clsx` + `twMerge`.
 *
 * @param {...Parameters<typeof extendTailwindMerge>} params
 *   Parámetros que se pasan directamente a `extendTailwindMerge`.
 *
 * @returns {( ...classValue: ClassValue[] ) => string}
 *   Una función que recibe valores de clase (strings, arrays, objetos, etc.)
 *   y devuelve una cadena optimizada sin clases conflictivas.
 *
 * @example
 * ```ts
 * const bluuinShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
 * const bluuinColorNames = bluuinShades.map(shade => `bluuin-${shade}`)
 *
 * const cn = generateCn({
 *   extend: {
 *     classGroups: {
 *       'bluuin-color': [...bluuinColorNames],
 *     },
 *     // It says that if there are conflicting class groups, the last one wins -bluuin/color-
 *     conflictingClassGroups: {
 *       'text-color': ['bluuin-color'],
 *       'bg-color': ['bluuin-color'],
 *       'border-color': ['bluuin-color'],
 *     },
 *   },
 * });
 *
 * const result = cn("text-red-500", "bluuin-color-blue-500");
 *
 * ```
 */
export const generateCn = (
  ...params: Parameters<typeof extendTailwindMerge>
) => {
  const extendedTwMerge = extendTailwindMerge(...params)

  return (...classValue: ClassValue[]) => extendedTwMerge(clsx(classValue))
}

export const cn = (...classValue: ClassValue[]) => {
  return twMerge(clsx(classValue))
}
