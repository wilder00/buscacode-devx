import { githubLightValues, vars } from '@buscacode/base-styles'
import { fallbackVar, style } from '@vanilla-extract/css'

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
