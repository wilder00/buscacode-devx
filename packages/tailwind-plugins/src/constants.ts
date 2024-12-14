import type { ColorIntensity, Colors } from './index.types'
import { getColorIntensitiesByColor } from './utils'

const baseColors: Record<Colors, Record<ColorIntensity, string> | string> = {
  primary: getColorIntensitiesByColor('#28398d'),
  secondary: getColorIntensitiesByColor('#bcacdb'),
  accent: getColorIntensitiesByColor('#7387c3'),
  surface: getColorIntensitiesByColor('#c6d3fa'),
  neutral: getColorIntensitiesByColor('#faf9f6'),
  inverse: getColorIntensitiesByColor('#161238'),
  info: '#1565c0',
  success: '#2e7d32',
  warning: '#f9a825',
  error: '#c62828'
}

export { baseColors }
