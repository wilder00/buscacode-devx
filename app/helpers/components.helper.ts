export type Route = {
  name: string
  path: string
  file: string
  clientPath?: string
}
export type ComponentRoutes = {
  layout: Route
  index: Route
  button: Route
}

export const componentsRoutes: ComponentRoutes = {
  layout: {
    name: 'Layout',
    path: 'components',
    clientPath: 'components',
    file: 'routes/components/layout.tsx'
  },
  index: {
    name: '',
    path: '',
    file: 'routes/components/index.tsx'
  },
  button: {
    name: 'Button',
    path: 'button',
    file: 'routes/components/button.tsx'
  }
}
