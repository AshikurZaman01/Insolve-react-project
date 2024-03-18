/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      padding: {
        default: "1rem",
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',

        accent: {
          default: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd'
        },
        grey: '#e8f0f1'
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.88)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      },
    },
  },
  plugins: [require("daisyui")],
}

