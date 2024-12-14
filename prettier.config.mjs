/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  semi: false,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  endOfLine: 'lf',
  trailingComma: 'none',
  plugins: [
    '@svgr/plugin-prettier',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {
      files: ['.svg'],
      options: {
        parser: 'html'
      }
    },
    {
      files: ['.*', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false
      }
    },
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro'
      }
    }
  ],
  tailwindFunctions: ['cn', 'twCn'],
  tailwindConfig: './tailwind.config.js'
}
