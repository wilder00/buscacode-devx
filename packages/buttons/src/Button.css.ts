import { githubLightValues, vars } from '@buscacode/base-styles'
import { createVar, fallbackVar, style } from '@vanilla-extract/css'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { recipe } from '@vanilla-extract/recipes'
import { breakpoints } from './Buttons.types'

const buttonColor = createVar()
const buttonBg = createVar()
const buttonBgSoft = createVar()
const buttonBorder = createVar()
const buttonHoverBg = createVar()
const buttonHoverColor = createVar()
const buttonHoverBorder = createVar()

// 1. Estilos base compartidos por todos los botones
const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  backgroundImage: 'none',
  //border: `1px solid ${buttonBorder}`,
  borderWidth: '1px',
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  //color: buttonColor,
  //backgroundColor: buttonBg,
  outline: 'none',
  textDecoration: 'none',
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.65,
    pointerEvents: 'none'
  },
  // To avoid the button to scale on touch devices, it just work with pointers
  '@media': {
    '(pointer: fine)': {
      ':active': {
        transform: 'scale(0.98)'
      }
    }
  },

  ':focus-visible': {
    boxShadow: `0 0 0 1px ${fallbackVar(
      vars.color.interfaceBackground,
      githubLightValues.color.interfaceBackground
    )}, 0 0 0 2px ${fallbackVar(
      vars.color.accentMain,
      githubLightValues.color.accentMain
    )}`
  }
})

const small = {
  height: '24px',
  padding: '0 7px',
  fontSize: '14px',
  borderRadius: '4px'
}

const medium = {
  height: '32px',
  padding: '4px 15px',
  fontSize: '14px',
  borderRadius: '6px'
}

const large = {
  height: '40px',
  padding: '6.4px 15px',
  fontSize: '16px',
  borderRadius: '8px'
}

// 2. Define la recipe con variantes
export const buttonRecipe = recipe({
  base,
  variants: {
    color: {
      primary: {
        vars: {
          [buttonColor]: fallbackVar(
            vars.color.interfaceBackground,
            githubLightValues.color.interfaceBackground
          ),
          [buttonBg]: fallbackVar(
            vars.color.brandPrimary,
            githubLightValues.color.brandPrimary
          ),
          [buttonBgSoft]: fallbackVar(
            vars.color.brandPrimarySoft,
            githubLightValues.color.brandPrimarySoft
          ),
          [buttonBorder]: fallbackVar(
            vars.color.brandPrimary,
            githubLightValues.color.brandPrimary
          ),
          [buttonHoverColor]: fallbackVar(
            vars.color.brandPrimaryDark,
            githubLightValues.color.brandPrimaryDark
          ),
          [buttonHoverBg]: fallbackVar(
            vars.color.brandPrimaryDark,
            githubLightValues.color.brandPrimaryDark
          ),
          [buttonHoverBorder]: fallbackVar(
            vars.color.brandPrimaryDark,
            githubLightValues.color.brandPrimaryDark
          )
        }
      },
      secondary: {
        vars: {
          [buttonColor]: fallbackVar(
            vars.color.interfaceBackground,
            githubLightValues.color.interfaceBackground
          ),
          [buttonBg]: fallbackVar(
            vars.color.brandSecondary,
            githubLightValues.color.brandSecondary
          ),
          [buttonBgSoft]: fallbackVar(
            vars.color.brandSecondarySoft,
            githubLightValues.color.brandSecondarySoft
          ),
          [buttonBorder]: fallbackVar(
            vars.color.brandSecondary,
            githubLightValues.color.brandSecondary
          ),
          [buttonHoverBg]: fallbackVar(
            vars.color.brandSecondaryDark,
            githubLightValues.color.brandSecondaryDark
          ),
          [buttonHoverColor]: fallbackVar(
            vars.color.brandSecondaryDark,
            githubLightValues.color.brandSecondaryDark
          ),
          [buttonHoverBorder]: fallbackVar(
            vars.color.brandSecondaryDark,
            githubLightValues.color.brandSecondaryDark
          )
        }
      }
    },
    variant: {
      solid: {
        vars: {
          [buttonColor]: fallbackVar(
            vars.color.interfaceBackground,
            githubLightValues.color.interfaceBackground
          )
        },
        backgroundColor: buttonBg,
        color: buttonColor,
        ':hover': {
          backgroundColor: buttonHoverBg,
          borderColor: buttonHoverBorder
        }
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: buttonBorder,
        color: buttonBorder,
        ':hover': {
          //color: buttonHoverBorder,
          //borderColor: buttonHoverBorder,
          filter: 'brightness(135%)'
        }
      },
      dashed: {
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
        borderColor: buttonBorder,
        color: buttonBorder,
        ':hover': {
          //color: buttonHoverBorder,
          //borderColor: buttonHoverBorder,
          filter: 'brightness(135%)'
        }
      },
      filled: {
        borderColor: 'transparent',
        backgroundColor: buttonBgSoft,
        color: buttonBorder,
        ':hover': {
          borderColor: buttonBorder
        }
      },
      text: {
        borderColor: 'transparent',
        color: buttonBorder,
        boxShadow: 'none',
        ':hover': {
          //backgroundColor: 'rgba(0, 0, 0, 0.06)',
          backgroundColor: buttonBgSoft
        }
      },
      link: {
        border: 'unset',
        color: buttonBorder,
        ':hover': {
          //color: buttonHoverBorder // Lighter link color
          filter: 'brightness(135%)'
        }
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

    shape: {
      default: {},
      circle: {
        minWidth: '32px',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: '50%'
      },
      round: {
        borderRadius: '32px'
      }
    },

    block: {
      true: {
        display: 'flex',
        width: '100%'
      }
    },

    danger: {
      true: {
        // Overrides for danger variants would go here, simplifying for now
        vars: {
          [buttonColor]: '#ff4d4f',
          [buttonBorder]: '#ff4d4f'
        },
        ':hover': {
          color: '#ff7875',
          borderColor: '#ff7875'
        }
      }
    },
    ghost: {
      true: {
        vars: {
          [buttonColor]: '#fff',
          [buttonBg]: 'transparent',
          [buttonBorder]: 'transparent'
        },
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
        ':hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.06)'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'medium',
    mobileSize: undefined,
    tabletSize: undefined,
    laptopSize: undefined,
    desktopSize: undefined,
    shape: 'default',
    danger: false,
    ghost: false,
    block: false
  }
})

export type ButtonRecipeVariants = NonNullable<
  RecipeVariants<typeof buttonRecipe>
>

/* --- Button content --- */

export const iconStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const contentInternal = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px'
})
