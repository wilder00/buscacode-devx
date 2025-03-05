import { cn } from '@buscacode/tailwind-utils'
import type { Size } from './Chips.types'
import CloseSvg from './CloseSvg'

export interface Chip {
  className?: string
  disabled?: boolean
  size?: Size
  dismissible?: boolean
  onClick?: () => void
  text?: string
}

export default function Chip({
  className,
  dismissible = false,
  onClick,
  text
}: Readonly<Chip>) {
  const Component = onClick ? 'button' : 'small'

  return (
    <Component
      className={cn(
        'bg-neutral-200 dark:bg-bc-inverse-50 dark:text-neutral-50',
        'inline-flex items-center justify-between gap-1.5 rounded-3xl px-3 py-0 align-middle transition-[background-color] duration-300',
        {
          'cursor-pointer hover:bg-neutral-300 dark:hover:bg-bc-inverse-100':
            Boolean(onClick),
          'pr-2': dismissible
        },
        className
      )}
      onClick={onClick}
    >
      <small>{text}</small>
      {dismissible && onClick && (
        <span className="inline-flex items-center justify-center text-base">
          <CloseSvg />
        </span>
      )}
    </Component>
  )
}
