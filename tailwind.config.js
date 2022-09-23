/** @type {import('tailwindcss').Config} */
const defaultheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['ClasDisplay-regular', ...defaultheme.fontFamily.sans ]
      },
      colors: {
        tomato: '#E50914',
        marigold: '#ffbe0b'
      }
    },
  },
  plugins: [],
}