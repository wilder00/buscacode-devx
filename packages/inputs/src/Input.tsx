import { cn } from '@buscacode/tailwind-utils'
import { forwardRef, type ReactNode } from 'react'
import type { Size } from './Input.types'
export interface InputProps extends React.RefAttributes<HTMLInputElement> {
  disabled?: boolean
  loading?: boolean
  className?: string
  size?: Size
  leading?: ReactNode
  trailing?: ReactNode
  label?: string
  transparent?: boolean
  readonly?: boolean
  error?: string | boolean
}
const Input: React.ForwardRefExoticComponent<
  InputProps & React.HTMLProps<HTMLInputElement>
> = forwardRef<
  HTMLInputElement,
  InputProps & React.HTMLProps<HTMLInputElement>
>(
  (
    {
      disabled = false,
      className,
      leading,
      trailing,
      label,
      transparent = false,
      readonly = false,
      autoComplete = 'off',
      error,
      ...restProps
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div
        className={cn('flex w-full flex-col gap-1', {
          'select-none': disabled
        })}
      >
        {Boolean(label) && (
          <div className="block text-sm font-semibold">{label}</div>
        )}
        <div
          className={cn(
            'border-bc-primary-50 dark:border-bc-neutral-500/20 dark:focus-within:border-bc-neutral-500/40 mt-0 flex w-full items-center justify-around gap-1 rounded-md border',
            {
              'bg-bc-neutral-400 dark:bg-bc-surface-900 px-2': !transparent,
              'border-bc-error focus-within:border-bc-error dark:border-bc-error dark:focus-within:border-bc-error':
                Boolean(error),
              'border-bc-inverse-50 bg-bc-neutral-800 dark:bg-bc-surface-500 cursor-not-allowed opacity-40':
                disabled
            },
            className
          )}
        >
          {Boolean(leading) && (
            <div className="text-bc-primary-50 flex items-center justify-center brightness-150">
              {leading}
            </div>
          )}
          <span
            className={cn('mt-0 w-full', {
              'select-none': disabled
            })}
          >
            <input
              className={cn(
                'dark:text-bc-neutral-500 dark:enabled:placeholder-bc-neutral-950/50 w-full border-0 border-none bg-transparent focus:outline-none',
                'mt-0 py-2',
                'font-thin',
                {
                  'pointer-events-none select-none': disabled
                }
              )}
              ref={ref}
              readOnly={readonly}
              {...restProps}
              autoComplete={autoComplete}
              disabled={disabled || readonly}
            />
          </span>
          {Boolean(trailing) && (
            <div className="text-bc-primary-50 flex items-center justify-center">
              {trailing}
            </div>
          )}
        </div>
        {Boolean(error) && typeof error === 'string' && (
          <span className="text-bc-error text-xs font-thin">{error}</span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
