# @buscacode/buttons

A flexible and themeable Button component for React, built with vanilla-extract.

## Installation

```bash
npm install @buscacode/buttons
```

## Usage

```tsx
import { Button } from '@buscacode/buttons'

function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="dashed">Dashed</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
      <Button variant="link" href="https://example.com">
        Link
      </Button>

      <Button loading>Loading</Button>

      <Button danger>Delete</Button>
    </div>
  )
}
```

## Props

| Prop           | Type                                                                    | Default     | Description                                                      |
| -------------- | ----------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------- |
| `variant`      | `'primary' \| 'secondary' \| 'dashed' \| 'outline' \| 'text' \| 'link'` | `'primary'` | The style variant of the button.                                 |
| `size`         | `'small' \| 'medium' \| 'large'`                                        | `'medium'`  | The size of the button.                                          |
| `shape`        | `'default' \| 'circle' \| 'round'`                                      | `'default'` | The shape of the button.                                         |
| `loading`      | `boolean`                                                               | `false`     | Whether the button is in a loading state.                        |
| `disabled`     | `boolean`                                                               | `false`     | Whether the button is disabled.                                  |
| `icon`         | `ReactNode`                                                             | -           | Icon component to display.                                       |
| `iconPosition` | `'start' \| 'end'`                                                      | `'start'`   | Position of the icon relative to the text.                       |
| `block`        | `boolean`                                                               | `false`     | Whether the button should fit the width of its parent container. |
| `danger`       | `boolean`                                                               | `false`     | Set the danger status of button.                                 |
| `href`         | `string`                                                                | -           | If set, renders as an anchor tag.                                |
| `...rest`      | `ButtonHTMLAttributes`                                                  | -           | Standard HTML button attributes.                                 |
