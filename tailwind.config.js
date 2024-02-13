/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "helvatica" : ['Helvatica Neue']
      },
      colors:{
        "pinky" : '#FFE7E7',
        "pinkies" : '#FFEBEB',
        "dusty" : '#CAA6A6',
        "base" : "#D1DCE5",
        "softy" : "#B47B84",
        "magenta" : "#944E63",
        "choco" : "#503C3C"
      }
    },
  },
  plugins: [],
}

