/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '345px',
      // => @media (min-width: 345px) { ... }

      'xs': '475px',
      // => @media (min-width: 475px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '885px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1700px',
      // => @media (min-width: 1700px) { ... }

      'pc': '1900px',
      // => @media (min-width: 1900px) { ... }

    },
    extend: {
      colors: {
        'custom-gold': '#96885f',
        'custom-black': '#161616',
      },
      height: {
        '128': '32rem',
        '176': '44rem',
        '256': '60rem',
        'navBar': '10svh',
      },
      width: {
        '128': '32rem',
        '176': '44rem',
        '176': '44rem',
      },
    },
  },
  plugins: [],

}