/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      },
      gridTemplateColumns: {
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}

