import type {
  ResponsiveSize,
  ResponsiveSizeGroup,
  SizeType
} from './Buttons.types'

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
