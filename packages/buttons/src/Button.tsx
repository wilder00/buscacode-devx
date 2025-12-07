import '@buscacode/base-styles/dist/index.css'

import { cn } from '@buscacode/tailwind-utils'
import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import type { Size } from './Buttons.types'
import SpinnerLoader from './SpinnerLoader'
import { buttonClass } from './styles.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  loading?: boolean
  className?: string
  size?: Size
  fullSize?: boolean
  onClick?: () => void
  outlined?: boolean
  textOnly?: boolean
}
export default function Button({
  children,
  className,
  disabled,
  loading,
  onClick,
  ...restProps
}: React.PropsWithChildren<ButtonProps>) {
  const handleClick = () => {
    if (disabled || loading) return
    onClick?.()
  }
  return (
    <button
      {...restProps}
      className={clsx(buttonClass, className)}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      <span
        className={cn({
          'opacity-0': loading
        })}
      >
        {children}
      </span>
      {loading && <SpinnerLoader />}
    </button>
  )
}
