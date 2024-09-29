/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container:{
      center: true,
      padding: '16',
    },
    extend: {
      colors:{
        prrimary: '#7c3aed',
      },
      screens:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}