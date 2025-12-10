import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Fix dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Correct folder paths
const iconsDir = path.resolve(__dirname, '../components')
const indexPath = path.resolve(__dirname, '../iconMaps.ts')

// Get all TSX component icons
const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.tsx'))

const entries = files.map((file) => {
  const name = file.replace('.tsx', '')
  //return `  "${name}": () => import('./components/${name}.tsx'),`
  return `  ['${name}']: () => import('./components/${name}'),`
})

const content = `export const iconsMap = {
${entries.join('\n')}
} as const
`

// Append new map
const finalContent = content

fs.writeFileSync(indexPath, finalContent)

console.log('iconsMap.ts generado!')
