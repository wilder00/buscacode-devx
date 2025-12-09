import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { ButtonRecipeVariants } from './Button.css'

export type Size = 'sm' | 'md' | 'lg'

export const ButtonTypes = {
  default: 'default',
  primary: 'dashed',
  link: 'link',
  text: 'text'
} as const
export type ButtonType = (typeof ButtonTypes)[keyof typeof ButtonTypes]

export const ButtonShapes = {
  default: 'default',
  circle: 'circle',
  round: 'round',
  square: 'square'
} as const
export type ButtonShape = ButtonRecipeVariants['shape']

export const ButtonVariantTypes = {
  solid: 'solid',
  outlined: 'outlined',
  dashed: 'dashed',
  filled: 'filled',
  text: 'text',
  link: 'link'
} as const
export type ButtonVariantType = ButtonRecipeVariants['variant']

export type ButtonHtmlType = ButtonHTMLAttributes<HTMLButtonElement>['type']

export type SizeType = 'small' | 'medium' | 'large'
export type ResponsiveSizeGroup =
  | 'size'
  | 'mobileSize'
  | 'tabletSize'
  | 'laptopSize'
  | 'desktopSize'

export type ResponsiveSize =
  | SizeType
  | {
      default?: SizeType
      mobile?: SizeType
      tablet?: SizeType
      laptop?: SizeType
      desktop?: SizeType
    }

export const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px'
}

export interface BaseButtonProps {
  type?: ButtonType
  //color?: ButtonColorType
  variant?: ButtonVariantType
  icon?: ReactNode
  color?: ButtonRecipeVariants['color']
  iconPosition?: 'start' | 'end'
  shape?: ButtonShape
  size?: ResponsiveSize
  disabled?: boolean
  loading?: boolean
  className?: string
  block?: boolean
  danger?: boolean
  [key: `data-${string}`]: string
  [key: `aria-${string}`]: string | boolean | number | undefined
}

export type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type' | 'color'
>
