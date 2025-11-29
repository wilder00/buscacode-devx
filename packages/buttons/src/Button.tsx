import { cn } from '@buscacode/tailwind-utils'
import type { ButtonHTMLAttributes } from 'react'
import type { Size } from './Buttons.types'
import SpinnerLoader from './SpinnerLoader'
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
  outlined = false,
  textOnly = false,
  fullSize,
  ...restProps
}: React.PropsWithChildren<ButtonProps>) {
  const handleClick = () => {
    if (disabled || loading) return
    onClick?.()
  }
  return (
    <button
      className={cn(
        {
          'border-bc-neutral-500 bg-bc-primary-300 text-bc-neutral-500 enabled:hover:bg-bc-primary-200 dark:border-bc-surface-50 dark:bg-bc-surface-500 dark:enabled:hover:bg-bc-surface-300':
            !outlined && !textOnly,
          'border-bc-primary-200 text-bc-primary-500 dark:border-bc-surface-50 dark:text-bc-neutral-500 bg-transparent':
            outlined && !textOnly,
          'text-bc-primary-500 dark:text-bc-neutral-500 border-transparent bg-transparent underline underline-offset-3':
            textOnly
        },
        'cursor-pointer rounded-md border duration-300 enabled:transition-transform enabled:active:scale-95 disabled:cursor-default',
        'relative flex items-center justify-center gap-1',
        'px-3 py-1 text-sm font-thin',
        {
          'w-full': fullSize,
          'disabled:dark:bg-bc-surface-500 select-none disabled:cursor-not-allowed disabled:opacity-40':
            disabled,
          'disabled:dark:bg-transparent': disabled && (outlined || textOnly)
        },
        className
      )}
      {...restProps}
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
