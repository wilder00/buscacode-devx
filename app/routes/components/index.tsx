import { Outlet } from 'react-router'

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: 'New React Router App Components' },
//     { name: 'description', content: 'Welcome to React Router!' }
//   ]
// }

export default function Components() {
  return (
    <div>
      <h1>Components</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
