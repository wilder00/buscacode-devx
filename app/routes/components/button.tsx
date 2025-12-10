/* eslint-disable no-empty-pattern */
import ButtonView from '@/presentation/components/ButtonsView/ButtonView'
import '@buscacode/buttons/index.css'
import type { Route } from '../components/+types/button'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App Components Button' },
    { name: 'desc button', content: 'Welcome to React Router!' }
  ]
}

export default function ComponentsButton() {
  return (
    <div>
      <ButtonView />
    </div>
  )
}
