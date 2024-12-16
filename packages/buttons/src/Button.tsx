import { cn } from '@buscacode/tailwind-utils'
import type { Size } from './Buttons.types'
import SpinnerLoader from './SpinnerLoader'
export interface ButtonProps {
  disabled?: boolean
  loading?: boolean
  className?: string
  size?: Size
  onclick?: () => void
}
export default function Button({
  children,
  className,
  disabled,
  loading,
  onclick
}: React.PropsWithChildren<ButtonProps>) {
  const handleClick = () => {
    if (disabled || loading) return
    onclick?.()
  }
  return (
    <button
      className={cn(
        'border-bc-neutral-500 bg-bc-secondary-600 text-bc-neutral-500 enabled:hover:bg-bc-secondary-400 dark:border-bc-surface-50 dark:bg-bc-surface-500 dark:enabled:hover:bg-bc-surface-300',
        'cursor-pointer rounded-md border duration-300 enabled:transition-transform enabled:active:scale-95 disabled:cursor-default',
        'relative flex items-center justify-center gap-1',
        'px-3 py-1 text-xs font-thin',
        {
          'disabled:cursor-not-allowed disabled:opacity-40 disabled:dark:bg-bc-surface-500':
            disabled
        },
        className
      )}
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
