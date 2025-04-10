export type Size = 'sm' | 'md' | 'lg'

export type OptionValue = string | number | null
export interface SelectableOption {
  label: string
  value: OptionValue
}
