import fs from 'fs'
import path from 'path'

const iconsDir = path.resolve(__dirname, 'src/components')
const indexPath = path.resolve(__dirname, 'src/iconMaps.ts')

// lee todos los archivos TSX generados por SVGR
const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.tsx'))

const entries = files.map((file) => {
  const name = file.replace('.tsx', '')
  return `  "${name}": () => import("./${name}"),`
})

const content = `
export const iconsMap = {
${entries.join('\n')}
} as const
`

let indexContent = fs.readFileSync(indexPath, 'utf8')
indexContent = indexContent
  .replace(/export\s+const\s+iconsMap[\s\S]*?as\s+const;?/g, '')
  .trimEnd()

const finalContent = indexContent + content

fs.writeFileSync(indexPath, finalContent)

console.log('iconsMap.ts generado!')
