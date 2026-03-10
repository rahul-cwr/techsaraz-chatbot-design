const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const Color = require('color')

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',

  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        xl: '36rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),

    plugin(function ({ addUtilities, theme }) {
      const colors = theme('colors')
      const newUtilities = {}

      Object.entries(colors).forEach(([name, value]) => {
        if (typeof value === 'object' && value[300]) {
          const hsla = Color(value[300]).alpha(0.45).hsl().string()

          newUtilities[`.shadow-outline-${name}`] = {
            boxShadow: `0 0 0 3px ${hsla}`,
          }
        }
      })

      addUtilities(newUtilities)
    }),
  ],
}