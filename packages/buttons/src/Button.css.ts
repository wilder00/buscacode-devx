import { style } from '@vanilla-extract/css'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { recipe } from '@vanilla-extract/recipes'
import { breakpoints } from './Buttons.types'

// 1. Estilos base compartidos por todos los botones
const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.2s'
})

const small = {
  fontSize: '0.8rem',
  padding: '0.3rem 0.8rem'
}

const medium = {
  fontSize: '1rem',
  padding: '0.5rem 1rem'
}

const large = {
  fontSize: '1.2rem',
  padding: '0.6rem 1.2rem'
}

// 2. Define la recipe con variantes
export const buttonRecipe = recipe({
  base,
  variants: {
    color: {
      primary: {
        backgroundColor: '#007bff',
        color: 'white',
        ':hover': { backgroundColor: '#0056b3' }
      },
      secondary: {
        backgroundColor: '#6c757d',
        color: 'white',
        ':hover': { backgroundColor: '#5a6268' }
      }
    },

    size: {
      small,
      medium,
      large
    },
    mobileSize: {
      small: {
        '@media': {
          [`screen and (min-width: ${breakpoints.mobile})`]: small
        }
      },
      medium: {
        '@media': {
          [`screen and (min-width: ${breakpoints.mobile})`]: medium
        }
      },
      large: {
        '@media': {
          [`screen and (min-width: ${breakpoints.mobile})`]: large
        }
      }
    },
    tabletSize: {
      small: {
        '@media': {
          [`screen and (min-width: ${breakpoints.tablet})`]: small
        }
      },
      medium: {
        '@media': {
          [`screen and (min-width: ${breakpoints.tablet})`]: medium
        }
      },
      large: {
        '@media': {
          [`screen and (min-width: ${breakpoints.tablet})`]: large
        }
      }
    },
    laptopSize: {
      small: {
        '@media': {
          [`screen and (min-width: ${breakpoints.laptop})`]: small
        }
      },
      medium: {
        '@media': {
          [`screen and (min-width: ${breakpoints.laptop})`]: medium
        }
      },
      large: {
        '@media': {
          [`screen and (min-width: ${breakpoints.laptop})`]: large
        }
      }
    },
    desktopSize: {
      small: {
        '@media': {
          [`screen and (min-width: ${breakpoints.desktop})`]: small
        }
      },
      medium: {
        '@media': {
          [`screen and (min-width: ${breakpoints.desktop})`]: medium
        }
      },
      large: {
        '@media': {
          [`screen and (min-width: ${breakpoints.desktop})`]: large
        }
      }
    },

    isDisabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        ':hover': { backgroundColor: '#ccc' }
      }
    }
  },

  defaultVariants: {
    color: 'primary',
    size: 'medium',
    mobileSize: undefined,
    tabletSize: undefined,
    laptopSize: undefined,
    desktopSize: undefined,
    isDisabled: false
  }
})

export type ButtonRecipeVariants = NonNullable<
  RecipeVariants<typeof buttonRecipe>
>

/* --- Button content --- */
const baseContent = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const buttonContentRecipeStyle = recipe({
  base: baseContent,
  variants: {
    iconPosition: {
      start: {
        justifyContent: 'flex-start'
      },
      end: {
        justifyContent: 'flex-end'
      }
    }
  },
  defaultVariants: {
    iconPosition: 'start'
  }
})
