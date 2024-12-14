import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.buscacode.com',
  output: 'hybrid',

  integrations: [
    starlight({
      title: 'Buscacode',
      logo: {
        src: './src/assets/logo.svg'
      },
      social: {
        github: 'https://github.com/withastro/starlight'
      },
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/tailwind.css'
      ],
      expressiveCode: {
        themes: ['tokyo-night', 'catppuccin-latte']
      },
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' }
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' }
        },
        {
          label: 'Utilities',
          autogenerate: { directory: 'utilities' }
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' }
        }
      ]
    }),
    tailwind(
      tailwind({
        //applyBaseStyles: false
      })
    ),
    react({
      include: ['**/react/*'],
      jsxImportSource: '@/components/react/IconsSection'
    })
  ],

  adapter: node({
    mode: 'standalone'
  })
})
