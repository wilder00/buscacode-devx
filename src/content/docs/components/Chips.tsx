import { Chip } from '@buscacode/chips'

export function ChipBase() {
  return (
    <Chip
      text="El texto"
      onClick={() => {
        console.log('Los Chips')
      }}
    />
  )
}

export function ChipBaseDismissible() {
  return (
    <Chip
      text="El texto"
      onClick={() => {
        console.log('Los Chips')
      }}
      dismissible
    />
  )
}
