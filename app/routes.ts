import { type RouteConfig, index, route } from '@react-router/dev/routes'
import { componentsRoutes } from './helpers/components.helper'

export default [
  index('routes/home.tsx'),
  route(componentsRoutes.layout.path, componentsRoutes.layout.file, [
    index(componentsRoutes.index.file),
    route(componentsRoutes.button.path, componentsRoutes.button.file)
  ])
] satisfies RouteConfig
