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
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(280px, 1fr))',
        'settings': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
      colors: {
        'primary_color':'#414141',
        'secundary_color':'#ffffff',
        'background_color': '#F3F4F6',
      },
      dropShadow: {
        '3xl': '2px 2px 2px rgba(0, 0, 0, .35)',
      },
      boxShadow:{
        'inner': 'inset -2px 0px 2px 0px rgba(0, 0, 0, .05)'
      }
    }
  },
  plugins: [],
}

