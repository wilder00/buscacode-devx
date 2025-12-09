import clsx from 'clsx'
import type { PropsWithChildren, ReactNode } from 'react'
import type { ButtonProps } from './Button'
import { buttonContentRecipeStyle } from './Button.css'
import type {
  ResponsiveSize,
  ResponsiveSizeGroup,
  SizeType
} from './Buttons.types'

export function IconWrapper({ icon }: { icon: ReactNode }) {
  return <span>{icon}</span>
}

export function ContentWrapper({
  iconPosition,
  icon,
  children
}: PropsWithChildren<{
  iconPosition: ButtonProps['iconPosition']
  icon: ReactNode
}>) {
  const contentWrapperClassName = clsx(
    buttonContentRecipeStyle({ iconPosition })
  )
  return (
    <span className={contentWrapperClassName}>
      {icon && <IconWrapper icon={icon} />}
      <span className="ml-2">{children}</span>
    </span>
  )
}

export const getSizeVariant = (
  field: ResponsiveSizeGroup,
  size?: ResponsiveSize
): SizeType | undefined => {
  if (!size) return undefined
  if (typeof size === 'string') return size

  const { default: defaultSize, mobile, tablet, laptop, desktop } = size
  switch (field) {
    case 'size':
      return defaultSize
    case 'mobileSize':
      return mobile
    case 'tabletSize':
      return tablet
    case 'laptopSize':
      return laptop
    case 'desktopSize':
      return desktop
    default:
      return defaultSize
  }
}
