import plugin from 'tailwindcss/plugin'

export const tailwindHeight = plugin(
  function ({ addUtilities, addComponents, e, config }) {
    console.log('tailwindHeight')
    console.log(addUtilities, addComponents, e, config)
  },
  {
    theme: {
      extend: {
        colors: {
          F00: '#f00'
        }
      }
    }
  }
)
