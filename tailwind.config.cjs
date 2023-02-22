/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-bg':{
          light:'#4d4d4d',
          default:'#333333',
          dark:'#1a1a1a'
        },
      },
    fontFamily:{
      primary:['PT Sans', 'sans-serif']
    }
    },
  },
  plugins: [],
}
