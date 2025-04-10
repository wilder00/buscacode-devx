import { cn } from '@buscacode/tailwind-utils'
import React, {
  forwardRef,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import Arrow from './Arrow'
import Dropdown from './Dropdown'
import type { OptionValue, SelectableOption, Size } from './Selectable.types'

export interface SelectableProps<T = OptionValue | OptionValue[]>
  extends React.RefAttributes<HTMLInputElement> {
  className?: string
  disabled?: boolean
  size?: Size
  label?: string
  transparent?: boolean
  leading?: JSX.Element
  trailing?: JSX.Element
  readonly?: boolean
  error?: string | boolean
  noOptionMessage?: string
  options?: SelectableOption[]
  multiple?: boolean
  enableUnselect?: boolean
  autoComplete?: string
  value?: T
  onChange?: (value: T) => void
  renderMultipleSelectedValues?: (
    value: (SelectableOption | undefined)[]
  ) => React.ReactNode
}

const Selectable: React.ForwardRefExoticComponent<SelectableProps> = forwardRef<
  HTMLInputElement,
  SelectableProps
>(function (
  {
    className,
    label,
    leading,
    trailing,
    disabled,
    readonly,
    error,
    autoComplete = 'off',
    transparent,
    options = [],
    onChange,
    multiple = false,
    enableUnselect = false,
    value = multiple ? [] : null,
    size,
    renderMultipleSelectedValues = (vals) =>
      vals?.map((selectedOption) => selectedOption?.label).join(', '),
    ...restProps
  },
  ref: React.Ref<HTMLInputElement>
) {
  const componentContainerRef = useRef<HTMLDivElement>(null)
  const inputWrapperRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')

  const singleSelectedValue = useMemo(() => {
    if (!Array.isArray(value)) {
      const optionSelected = options.find((e) => e.value === value)
      return optionSelected ?? null
    }
    return null
  }, [value])

  const multipleSelectedValues = useMemo(() => {
    if (Array.isArray(value)) {
      const optionsSelected = value.map((val) =>
        options.find((f) => f.value === val)
      )
      return optionsSelected ?? null
    }
    return null
  }, [value])

  const filteredOptions = useMemo(() => {
    if (inputValue === '') return [...options]
    return options.filter((opt) =>
      opt.label.match(new RegExp(`${inputValue}`, 'ig'))
    )
  }, [inputValue])

  const handleClickOnArrow = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleFocus = () => {
    setIsOpen(true)
  }

  const calculateMultipleSelect = (
    newValue: OptionValue,
    restValue: OptionValue[]
  ) => {
    const isInList = restValue.includes(newValue)

    if (isInList) {
      return (
        enableUnselect &&
        onChange?.(restValue.filter((item) => item !== newValue))
      )
    }

    onChange?.([...restValue, newValue])
  }

  const calculateSingleSelect = (
    newValue: OptionValue,
    previewValue: OptionValue
  ) => {
    const isTheSame = newValue === previewValue
    if (isTheSame) {
      return enableUnselect && onChange?.(null)
    }
    onChange?.(newValue)
  }

  const handleClickOption = (option: SelectableOption) => {
    const theValue = value
    if (multiple && Array.isArray(theValue)) {
      calculateMultipleSelect(option.value, theValue)
    } else if (!Array.isArray(theValue)) {
      calculateSingleSelect(option.value, theValue)
      setIsOpen(false)
    }
  }

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      if (
        componentContainerRef.current &&
        !componentContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleGlobalClick)
    return () => {
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [])

  useEffect(() => {
    if (!multiple) {
      setInputValue(singleSelectedValue?.label ?? '')
    }
  }, [singleSelectedValue, multiple])

  useEffect(() => {
    if (!multiple) {
      if (!isOpen) {
        setInputValue(singleSelectedValue?.label ?? '')
      }
    }
  }, [isOpen, multiple])

  const shouldRenderMultipleOptions =
    !leading &&
    !!renderMultipleSelectedValues &&
    multipleSelectedValues !== null

  return (
    <div
      ref={componentContainerRef}
      className={cn('flex w-full flex-col gap-1', className)}
    >
      {Boolean(label) && (
        <div className="block text-sm font-semibold">{label}</div>
      )}
      <div
        ref={inputWrapperRef}
        className={cn(
          'relative mt-0 flex w-full items-center justify-around gap-1 rounded-md border border-bc-primary-50 dark:border-bc-neutral-500/20 dark:focus-within:border-bc-neutral-500/40',
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

        <label
          className={cn('mt-0 w-full', {
            'select-none': disabled,
            'inline items-center': multiple
          })}
        >
          {shouldRenderMultipleOptions && (
            <Fragment>
              {renderMultipleSelectedValues(multipleSelectedValues)}{' '}
            </Fragment>
          )}
          <input
            className={cn(
              'w-full border-0 border-none bg-transparent focus:outline-none dark:text-bc-neutral-500 dark:enabled:placeholder-bc-neutral-950/50',
              'mt-0 py-2',
              'font-thin',
              {
                'inline w-fit flex-1': multiple,
                'pointer-events-none select-none': disabled
              },
              size
            )}
            ref={ref}
            readOnly={readonly}
            {...restProps}
            value={inputValue}
            autoComplete={autoComplete}
            onFocus={handleFocus}
            disabled={disabled || readonly}
            onChange={handleOnChangeInput}
          />
        </label>

        {Boolean(trailing) && (
          <div className="flex items-center justify-center text-bc-primary-50">
            {trailing}
          </div>
        )}
        {!trailing && (
          <button
            ref={arrowRef}
            className="size-5 bg-transparent p-1"
            onClick={handleClickOnArrow}
          >
            <Arrow inverse={isOpen} />
          </button>
        )}

        <Dropdown
          options={filteredOptions}
          isOpen={isOpen}
          multiple={multiple}
          value={value}
          onClickOption={handleClickOption}
        />
      </div>
    </div>
  )
})

Selectable.displayName = 'Selectable'

export default Selectable
