import { cn } from '@buscacode/tailwind-utils'

interface ShowAreaProps {
  className?: string
  content?: () => React.ReactNode
  children?: React.ReactNode
}

export default function ShowArea({
  className,
  content,
  children
}: Readonly<ShowAreaProps>) {
  return (
    <div
      className={cn(
        'width-full not-content flex min-h-[150px] flex-col items-stretch justify-stretch',
        className
      )}
    >
      <div
        className={cn(
          'flex h-full w-full flex-grow items-center justify-center gap-1 bg-bc-neutral p-4 dark:bg-bc-inverse-900',
          'rounded-md'
        )}
      >
        {content?.()}
        {children}
      </div>
    </div>
  )
}
