import { Spinner } from '@buscacode/icons'

export default function SpinnerLoader() {
  return (
    <span className="absolute flex items-center justify-center">
      <Spinner className="animate-spin" />
    </span>
  )
}
