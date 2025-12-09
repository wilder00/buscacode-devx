import { githubLightValues, vars } from '@buscacode/base-styles'
import { fallbackVar, style } from '@vanilla-extract/css'
import { breakpoints } from './Buttons.types'

export const buttonClass = style({
  border: '1px solid',
  borderColor: fallbackVar(
    vars.color.brandPrimary,
    githubLightValues.color.brandPrimary
  ),
  background: fallbackVar(
    vars.color.interfaceBackground,
    githubLightValues.color.interfaceBackground
  ),
  color: fallbackVar(
    vars.color.brandSecondary,
    githubLightValues.color.brandSecondary
  ),
  padding: '20px'
})

// --- Clases Base (Sin Media Queries) ---
// Estas definen el estilo *por defecto* si no se especifica un breakpoint específico.

export const sizeMedium = style({
  fontSize: '1rem',
  padding: '0.5rem 1rem'
})

export const sizeSmall = style({
  fontSize: '0.8rem',
  padding: '0.3rem 0.8rem'
})

export const sizeLarge = style({
  fontSize: '1.2rem',
  padding: '0.6rem 1.2rem'
})

// --- Clases Responsivas (Con Media Queries) ---
// Estas clases solo aplican sus estilos cuando se cumple la condición @media.

// --- Mobile Breakpoint (min-width: 576px) ---
export const mobileSmall = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile})`]: {
      fontSize: '0.8rem',
      padding: '0.3rem 0.8rem'
    }
  }
})

export const mobileMedium = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile})`]: {
      fontSize: '1rem',
      padding: '0.5rem 1rem'
    }
  }
})

export const mobileLarge = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile})`]: {
      fontSize: '1.2rem',
      padding: '0.6rem 1.2rem'
    }
  }
})

// --- Tablet Breakpoint (min-width: 768px) ---
export const tabletSmall = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      fontSize: '0.8rem',
      padding: '0.3rem 0.8rem'
    }
  }
})

export const tabletMedium = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      fontSize: '1rem',
      padding: '0.5rem 1rem'
    }
  }
})

export const tabletLarge = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      fontSize: '1.2rem',
      padding: '0.6rem 1.2rem'
    }
  }
})

// --- Desktop Breakpoint (min-width: 1024px) ---
export const laptopSmall = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.laptop})`]: {
      fontSize: '0.8rem',
      padding: '0.3rem 0.8rem'
    }
  }
})

export const laptopMedium = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.laptop})`]: {
      fontSize: '1rem',
      padding: '0.5rem 1rem'
    }
  }
})

export const laptopLarge = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.laptop})`]: {
      fontSize: '1.2rem',
      padding: '0.6rem 1.2rem'
    }
  }
})

// --- Desktop Breakpoint (min-width: 1024px) ---
export const desktopSmall = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.desktop})`]: {
      fontSize: '0.8rem',
      padding: '0.3rem 0.8rem'
    }
  }
})

export const desktopMedium = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.desktop})`]: {
      fontSize: '1rem',
      padding: '0.5rem 1rem'
    }
  }
})

export const desktopLarge = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.desktop})`]: {
      fontSize: '1.2rem',
      padding: '0.6rem 1.2rem'
    }
  }
})

/* --- IconStyles --- */

export const buttonContentBaseStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})
export const buttonContentStartStyle = style({
  justifyContent: 'flex-start'
})
export const buttonContentEndStyle = style({
  justifyContent: 'flex-end'
})
