/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '860px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    boxShadow:{
      'shadow': '0px 4px 4px rgba(0, 0, 0, 0.5)',
    },
    extend: {
      colors: {
        'primary_color':'#292929',
        'secundary_color':'#ffffff',
        'grey': '#f0f0f0',
      },
      dropShadow: {
        '3xl': '2px 2px 2px rgba(0, 0, 0, .25)',
      },
      boxShadow: {
        'inner': '-2px -2px -2px rgba(0, 0, 0, 1)',
      },
    }
  },
  plugins: [],
}

