import { cn } from '@buscacode/tailwind-utils'
import type { OptionValue, SelectableOption } from './Selectable.types'

interface DropdownProps {
  className?: string
  options: SelectableOption[]
  noOptionMessage?: string
  isOpen?: boolean
  value?: OptionValue | OptionValue[]
  multiple?: boolean
  onClickOption?: (option: SelectableOption) => void
}

export default function Dropdown({
  className,
  options,
  noOptionMessage = 'No options',
  isOpen = false,
  multiple = false,
  onClickOption,
  value = null
}: Readonly<DropdownProps>): JSX.Element {
  const hasOptions = options.length > 0
  return (
    <div
      className={cn(
        'absolute left-0 right-0 top-[calc(100%_+_2px)] z-10 overflow-hidden rounded-lg dark:bg-bc-surface-900',
        'max-h-0',
        {
          'max-h-[300px]': isOpen
        },
        className
      )}
    >
      {!hasOptions && <div>{noOptionMessage}</div>}
      {hasOptions && (
        <div
          className={cn(
            'flex max-h-[300px] flex-col gap-1 overflow-y-scroll overscroll-contain rounded-md p-2',
            '[&::-webkit-scrollbar-thumb]:bg-bc-inverse-50 hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-track]:bg-bc-inverse-200 [&::-webkit-scrollbar]:w-1'
          )}
        >
          {options.map((option) => {
            return (
              <button
                key={`${option.value}`}
                className={cn(
                  'w-full cursor-pointer rounded-sm px-4 py-1 text-left dark:bg-bc-inverse-500 hover:dark:bg-bc-inverse-300',
                  {
                    'dark:bg-bc-primary-500 hover:dark:bg-bc-primary-400':
                      Array.isArray(value) && multiple
                        ? value?.includes(option.value)
                        : value === option.value
                  }
                )}
                onClick={() => {
                  onClickOption?.(option)
                }}
              >
                {option.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
