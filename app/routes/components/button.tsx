/* eslint-disable no-empty-pattern */
import { Button } from '@buscacode/buttons'
import '@buscacode/buttons/dist/index.css'
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

        {/* Probando 1 */}
        <Button>Text</Button>
        {/* Probando 2 */}
        <Button>Text</Button>
        {/* Probando 3 */}
        <Button>Text</Button>
        {/* Probando 4 */}
        <Button>Text</Button>
        {/* Probando 5 */}
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
      </div>
    </div>
  )
}
