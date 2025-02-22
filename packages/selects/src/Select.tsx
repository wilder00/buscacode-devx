import { cn } from '@buscacode/tailwind-utils'
import { forwardRef } from 'react'
import type { Size } from './Select.types'
export interface SelectProps extends React.RefAttributes<HTMLSelectElement> {
  disabled?: boolean
  loading?: boolean
  className?: string
  size?: Size
  leading?: JSX.Element
  trailing?: JSX.Element
  label?: string
  transparent?: boolean
  readonly?: boolean
  error?: string | boolean
}

const Select: React.ForwardRefExoticComponent<
  SelectProps & React.HTMLProps<HTMLSelectElement>
> = forwardRef<
  HTMLSelectElement,
  SelectProps & React.HTMLProps<HTMLSelectElement>
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
      children,
      ...restProps
    },
    ref: React.Ref<HTMLSelectElement>
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
            'mt-0 flex w-full items-center justify-around gap-1 rounded-md border border-bc-primary-50 dark:border-bc-neutral-500/20 dark:focus-within:border-bc-neutral-500/40',
            {
              'bg-bc-neutral-400 px-2 dark:bg-bc-surface-900': !transparent,
              'border-bc-error focus-within:border-bc-error dark:border-bc-error dark:focus-within:border-bc-error':
                Boolean(error),
              'cursor-not-allowed border-bc-inverse-50 bg-bc-neutral-800 opacity-40 dark:bg-bc-surface-500':
                disabled
            },
            className
          )}
        >
          {Boolean(leading) && (
            <div className="flex items-center justify-center text-bc-primary-50 brightness-150">
              {leading}
            </div>
          )}
          <span
            className={cn('mt-0 w-full', {
              'select-none': disabled
            })}
          >
            <select
              className={cn(
                'w-full border-0 border-none bg-transparent focus:outline-none dark:text-bc-neutral-500 dark:enabled:placeholder-bc-neutral-950/50 dark:[&_option]:bg-bc-surface-950',
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
            >
              {children}
            </select>
          </span>
          {Boolean(trailing) && (
            <div className="flex items-center justify-center text-bc-primary-50">
              {trailing}
            </div>
          )}
        </div>
        {Boolean(error) && typeof error === 'string' && (
          <span className="text-xs font-thin text-bc-error">{error}</span>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
export default Select
