import { cn } from '@buscacode/tailwind-utils'

interface ArrowProps {
  className?: string
  inverse?: boolean
}

export default function Arrow({
  className,
  inverse = false
}: Readonly<ArrowProps>): JSX.Element {
  return (
    <div
      className={cn(
        'h-0 w-0 rotate-0 border-x-[7px] border-b-[7px] border-x-transparent border-b-bc-primary-500 transition-transform dark:border-b-bc-neutral-950',
        '',
        {
          '-rotate-180': inverse
        },
        className
      )}
    />
  )
}
