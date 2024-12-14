export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  accent = 'accent',
  surface = 'surface',
  neutral = 'neutral',
  inverse = 'inverse',
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error'
}

export type Colors = keyof typeof Color
export type ColorIntensity =
  | 'DEFAULT'
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950'
