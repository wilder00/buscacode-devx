import { cn } from '@buscacode/tailwind-utils'
import type { ReactNode } from 'react'

interface ArrowProps {
  className?: string
  inverse?: boolean
}

export default function Arrow({
  className,
  inverse = false
}: Readonly<ArrowProps>): ReactNode {
  return (
    <div
      className={cn(
        'border-b-bc-primary-500 dark:border-b-bc-neutral-950 h-0 w-0 rotate-0 border-x-[7px] border-b-[7px] border-x-transparent transition-transform',
        '',
        {
          '-rotate-180': inverse
        },
        className
      )}
    />
  )
}
