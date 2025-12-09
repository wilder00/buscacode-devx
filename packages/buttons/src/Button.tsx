import '@buscacode/base-styles/index.css'
import clsx from 'clsx'
import type { PropsWithChildren, Ref } from 'react'
import { forwardRef } from 'react'
import { buttonRecipe } from './Button.css'
import { ContentWrapper, getSizeVariant } from './Button.helper'
import type {
  BaseButtonProps,
  ButtonHtmlType,
  MergedHTMLAttributes
} from './Buttons.types'
import SpinnerLoader from './SpinnerLoader'
import { buttonClass } from './styles.css'

export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {
  href?: string
  htmlType?: ButtonHtmlType
  full?: boolean
}

export default forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      children,
      className,
      disabled,
      loading,
      htmlType,
      icon,
      iconPosition,
      size = 'medium',
      href,
      ...restProps
    }: PropsWithChildren<ButtonProps>,
    ref
  ) {
    if (href !== undefined) {
      return (
        <a
          {...restProps}
          className={clsx(buttonClass, className)}
          href={disabled || loading ? undefined : href}
          ref={ref as Ref<HTMLAnchorElement>}
          tabIndex={disabled || loading ? -1 : 0}
          aria-disabled={disabled || loading}
        >
          {icon}
          {children}
        </a>
      )
    }

    const buttonClassName = clsx(
      buttonRecipe({
        size: getSizeVariant('size', size),
        mobileSize: getSizeVariant('mobileSize', size),
        tabletSize: getSizeVariant('tabletSize', size),
        laptopSize: getSizeVariant('laptopSize', size),
        desktopSize: getSizeVariant('desktopSize', size)
      }),
      className
    )

    return (
      <button
        {...restProps}
        ref={ref as Ref<HTMLButtonElement>}
        className={buttonClassName}
        disabled={disabled || loading}
        type={htmlType}
        tabIndex={disabled || loading ? -1 : 0}
        aria-disabled={disabled || loading}
      >
        <ContentWrapper iconPosition={iconPosition} icon={icon}>
          {children}
        </ContentWrapper>
        {loading && <SpinnerLoader />}
      </button>
    )
  }
)
