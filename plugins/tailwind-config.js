import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'

//function tailwindPlugin(context, options) {
function tailwindPlugin() {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [postcssImport, tailwindcss, autoprefixer]
      return postcssOptions
    }
  }
}

export default tailwindPlugin
