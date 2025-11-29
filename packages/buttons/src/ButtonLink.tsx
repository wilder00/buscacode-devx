import { cn } from '@buscacode/tailwind-utils'
import React from 'react'
import type { Size } from './Buttons.types'
export interface ButtonLinkProps {
  disabled?: boolean
  className?: string
  size?: Size
  href?: string
  target?: '_blank' | '_self'
}

export default function ButtonLink({
  children,
  className,
  disabled = false,
  href,
  target = '_self',
  ...nextProps
}: React.PropsWithChildren<ButtonLinkProps>) {
  return (
    <a
      className={cn(
        'border-bc-neutral-500 bg-bc-secondary-600 text-bc-neutral-500 enabled:hover:bg-bc-secondary-400 dark:border-bc-surface-50 dark:bg-bc-surface-500 dark:enabled:hover:bg-bc-surface-300',
        'cursor-pointer rounded-md border duration-300 enabled:transition-transform enabled:active:scale-95 disabled:cursor-default',
        'relative flex items-center justify-center gap-1',
        'px-3 py-1 text-xs font-thin',
        {
          'disabled:dark:bg-bc-surface-500 disabled:cursor-not-allowed disabled:opacity-40':
            disabled
        },
        className
      )}
      {...nextProps}
      {...(!disabled && { href })}
      target={target}
    >
      <span
        className={cn({
          'opacity-1': !disabled
        })}
      >
        {children}
      </span>
    </a>
  )
}
