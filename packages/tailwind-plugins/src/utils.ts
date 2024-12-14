import chroma from 'chroma-js'
import type { ColorIntensity } from './index.types'

export const hexToRgb = (hex: string): [number, number, number] => {
  if (hex.startsWith('#')) {
    hex = hex.slice(1)
  }
  const bigint = parseInt(hex, 16)
  return [
    (bigint >> 16) & 255, // Red
    (bigint >> 8) & 255, // Green
    bigint & 255 // Blue
  ]
}

export const calculateLuminance = ([r, g, b]: [
  number,
  number,
  number
]): number => {
  // Normalize RGB values to [0, 1]
  r /= 255
  g /= 255
  b /= 255
  // Calculate luminance
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export const mapLuminanceToIntensity = (luminance: number): ColorIntensity => {
  if (luminance > 0.9) return '50'
  if (luminance > 0.8) return '100'
  if (luminance > 0.7) return '200'
  if (luminance > 0.6) return '300'
  if (luminance > 0.5) return '400'
  if (luminance > 0.4) return '500'
  if (luminance > 0.3) return '600'
  if (luminance > 0.2) return '700'
  if (luminance > 0.1) return '800'
  if (luminance > 0.05) return '900'
  return '950'
}

export const getColorIntensity = (hex: string): ColorIntensity => {
  const rgb = hexToRgb(hex)
  const luminance = calculateLuminance(rgb)
  return mapLuminanceToIntensity(luminance)
}

export const getColorIntensitiesByColor = (
  baseColor: string
): Record<ColorIntensity, string> => {
  const intensities: ColorIntensity[] = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '950'
  ]

  const lightest = chroma(baseColor).brighten(1.5).hex()
  const darkest = chroma(baseColor).darken(1.5).hex()
  // Create a scale of colors from light to dark
  const scale = chroma.scale([lightest, baseColor, darkest]).domain([0, 0.5, 1])

  // Map intensities to calculated colors
  const result: Record<ColorIntensity, string> = {
    DEFAULT: baseColor,
    50: baseColor,
    100: baseColor,
    200: baseColor,
    300: baseColor,
    400: baseColor,
    500: baseColor,
    600: baseColor,
    700: baseColor,
    800: baseColor,
    900: baseColor,
    950: baseColor
  }

  intensities.forEach((intensity, index) => {
    const value = index / (intensities.length - 1) // Map index to [0, 1]
    result[intensity] = scale(value).hex()
  })

  return result
}
