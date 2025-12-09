import { createThemeContract } from '@vanilla-extract/css'

export const vars = createThemeContract({
  color: {
    brandPrimary: null,
    brandPrimarySoft: null,
    brandPrimaryDark: null,
    brandSecondary: null,
    brandSecondarySoft: null,
    brandSecondaryDark: null,
    interfaceBackground: null,
    interfaceBackgroundAlt: null,
    interfaceForeground: null,
    interfaceForegroundAlt: null,
    accentMain: null,
    accentMainSoft: null,
    accentMainDark: null,
    statusSuccess: null,
    statusError: null,
    statusWarning: null,
    statusInfo: null,
    disableDark: null,
    disableBase: null,
    disableSoft: null
  }
})
