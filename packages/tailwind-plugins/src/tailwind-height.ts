import plugin from 'tailwindcss/plugin'
import { PluginCreator } from 'tailwindcss/types/config'

const heightPlugin: PluginCreator = ({ addUtilities }) => {
  console.log('otra version del plugin')

  try {
    addUtilities({
      '.content-auto': {
        'content-visibility': 'auto'
      },
      '.content-hidden': {
        'content-visibility': 'hidden'
      },
      '.content-visible': {
        'content-visibility': 'visible'
      }
    })
  } catch (error) {
    console.error('El error es :', error)
  }
}

export const tailwindHeight = plugin(heightPlugin)
