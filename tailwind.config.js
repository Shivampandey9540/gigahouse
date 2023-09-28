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
      gridColumn: {
        'cols-1H': 'repeat(8, minmax(0, 1.5fr))'
      },
      backgroundImage: {
        'hero_first_img': "url('./images/Rectangle 5.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
        'navany': 'mymove 1s',
        wiggle: 'wiggle 2s ease-in-out',
        wiggle2: 'wiggle2 2s ease-in-out',

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
        wiggle: {
          '0%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        wiggle2: {
          '0%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },


    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
