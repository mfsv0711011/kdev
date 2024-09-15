/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'gilroy': 'Gilroy',
        'gilroy-medium': 'Gilroy-medium',
        'gilroy-semibold': 'Gilroy-semibold',
        'gilroy-bold': 'Gilroy-bold',
      },
      colors: {
        dark: '#222222',
        purple: '#7F56D9',
        gray: '#475467',
        darkGray: '#101828',
        middleGray: '#344054',
        lightGray: '#A3B2BD'
      },
      animation:{
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        'shake' : {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%' : {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        }
      }
    },
  },
  plugins: [],
}

