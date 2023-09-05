// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridColumn:{
        'cols-1H': 'repeat(8, minmax(0, 1.5fr))'
      },
      backgroundImage: {
        'hero_first_img': "url('./images/Rectangle 5.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
        'navany': 'mymove 1s',
      },
      keyframes: {
        'mymove': {
          '0%': {
            position: "relative",
            insetBlockStart: '-50px',
          },
          '100%': {
            position: "relative",
            insetBlockStart: '0',
          },
    },
  }
}
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
