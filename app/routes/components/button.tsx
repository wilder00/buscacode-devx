/* eslint-disable no-empty-pattern */
import { Button } from '@buscacode/buttons'
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
      <h1>Button</h1>
      <div>
        <h2>This is the button</h2>
        <p>this is the description</p>

        <Button>Text</Button>
      </div>
    </div>
  )
}
