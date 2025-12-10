import '@buscacode/base-styles/index.css'
import clsx from 'clsx'
import type { PropsWithChildren, Ref } from 'react'
import { forwardRef } from 'react'
import { buttonRecipe, contentInternal, iconStyle } from './Button.css'
import { getSizeVariant } from './Button.helper'
import type {
  BaseButtonProps,
  ButtonHtmlType,
  MergedHTMLAttributes
} from './Buttons.types'
import SpinnerLoader from './SpinnerLoader'

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
      variant = 'solid',
      size = 'medium',
      shape = 'default',
      block = false,
      danger = false,
      color = 'primary',
      href,
      ...restProps
    }: PropsWithChildren<ButtonProps>,
    ref
  ) {
    const buttonClass = clsx(
      buttonRecipe({
        variant,
        color,
        size: getSizeVariant('size', size),
        mobileSize: getSizeVariant('mobileSize', size),
        tabletSize: getSizeVariant('tabletSize', size),
        laptopSize: getSizeVariant('laptopSize', size),
        desktopSize: getSizeVariant('desktopSize', size),
        shape,
        block,
        danger
      }),
      className
    )

    const renderContent = () => {
      if (loading) {
        return (
          <span className={contentInternal}>
            <span className={iconStyle}>
              <SpinnerLoader />
            </span>
            {children}
          </span>
        )
      }

      if (!icon) {
        return children
      }

      return (
        <span
          className={contentInternal}
          style={{
            flexDirection: iconPosition === 'end' ? 'row-reverse' : 'row'
          }}
        >
          <span className={iconStyle}>{icon}</span>
          <span style={{ color: 'white' }}>{children}</span>
        </span>
      )
    }

    if (href !== undefined) {
      return (
        <a
          {...restProps}
          ref={ref as Ref<HTMLAnchorElement>}
          className={buttonClass}
          href={disabled || loading ? undefined : href}
          aria-disabled={disabled || loading}
        >
          {renderContent()}
        </a>
      )
    }

    return (
      <button
        {...restProps}
        ref={ref as Ref<HTMLButtonElement>}
        className={buttonClass}
        disabled={disabled || loading}
        type={htmlType}
        aria-disabled={disabled || loading}
      >
        {renderContent()}
      </button>
    )
  }
)
