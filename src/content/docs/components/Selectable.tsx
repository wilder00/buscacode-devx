import { Selectable, type OptionValue } from '@buscacode/selectable'
import { useState } from 'react'

export function SelectableBase() {
  return <Selectable />
}

export function SelectableWithOptions() {
  return (
    <Selectable
      options={[
        {
          label: 'option 1',
          value: 'AB'
        },
        {
          label: 'option 2',
          value: 12
        },
        {
          label: 'option 3',
          value: 120
        },
        {
          label: 'option 4',
          value: 'adf'
        },
        {
          label: 'option 5',
          value: 12.4
        }
      ]}
    />
  )
}

export function SelectableWithOptionsLarge() {
  const [value, setValue] = useState<string | number>('AB')
  return (
    <Selectable
      options={[
        {
          label: 'option 1',
          value: 'AB'
        },
        {
          label: 'option 2',
          value: 12
        },
        {
          label:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          value: 120
        },
        {
          label: 'option 4',
          value: 'adf'
        },
        {
          label: 'option 5',
          value: 12.4
        },
        {
          label: 'option 1',
          value: 'ABC'
        },
        {
          label: 'option 2',
          value: 123
        },
        {
          label:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          value: 1200
        },
        {
          label: 'option 4',
          value: 'adf g'
        },
        {
          label: 'option 5',
          value: 12.44
        }
      ]}
      value={value}
      onChange={(value: OptionValue) => {
        console.log('the value: ', value)
        setValue(value)
      }}
    />
  )
}

export function SelectableWithEnableUnselect() {
  const [value, setValue] = useState<string | number>('AB')
  return (
    <Selectable
      options={[
        {
          label: 'option 1',
          value: 'AB'
        },
        {
          label: 'option 2',
          value: 12
        },
        {
          label:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          value: 120
        }
      ]}
      value={value}
      enableUnselect
      onChange={(value: OptionValue) => {
        console.log('the value: ', value)
        setValue(value)
      }}
    />
  )
}

export function SelectableWithMultiple() {
  const [value, setValue] = useState<OptionValue[]>(['AB'])
  return (
    <Selectable
      options={[
        {
          label: 'option 1',
          value: 'AB'
        },
        {
          label: 'option 2',
          value: 12
        },
        {
          label:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          value: 120
        },
        {
          label: 'option 4',
          value: 'adf'
        },
        {
          label: 'option 5 con algo de datos',
          value: 12.4
        },
        {
          label: 'option 15',
          value: 'ABC'
        },
        {
          label: 'option 20',
          value: 123
        }
      ]}
      value={value}
      multiple
      enableUnselect
      onChange={(value: OptionValue[]) => {
        console.log('the value: ', value)
        setValue(value)
      }}
    />
  )
}
