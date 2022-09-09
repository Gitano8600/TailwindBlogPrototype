/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: {
          100: '#dbeafe',
          200: '#888883',
        },
      },
    },
  },
  plugins: [],
}
