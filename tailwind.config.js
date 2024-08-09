/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,css}"],
  theme: { 
    extend: {
      letterSpacing: {
        widemax: "0.17em"
      },
      colors: {
        'onyx': '#393e41',
        'timberwolf': '#d3d0cb',
        'oldGold': '#e2c044',
        'myrtle': '#587b7f',
        'raisin' : '#202124',
        'bright-gray' : '#ece7f3',
        'meat' : '#ebb841',
        'fire' : '#af2819',
        'lake' : '#5f82c0',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'bungee' : ['Bungee', 'sans-serif'],
      },
      backgroundImage: {
        'custom' : "url('/dist/images/bg.jpg')",
        'hero': "url('/dist/images/hero.jpg')",
        'hero-white': "url('/dist/images/hero_white.jpg')",
        'topography': "url('/dist/images/topography.svg')",
        'texture': "url('/dist/images/texture.svg')",
        'pattern': "url('/dist/images/pattern.svg')",
        'pattern_white': "url('/dist/images/pattern_white.svg')",
    },
    container: {
      center: true,
      padding: "1rem",
      screens : {
        lg : "1124px",
        xl : "1124px",
        "2xl": "1124px",
      }
    },
  plugins: [],
}
}
}
