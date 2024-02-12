/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "helvatica" : ['Helvatica Neue']
      },
      colors:{
        "kuning" : '#FFF4D4',
        "biru" : '#0E6FFF',
        "pastel" : "#D1DCE5",
      }
    },
  },
  plugins: [],
}

