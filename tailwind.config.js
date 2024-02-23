/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
      lightGray:'#D9D9D9',
       darkGreen:'#0b3105',
       lightGreen:'#446a1a',
       heavyGreen:'#2e4911',
       darkOrange:'#ffad3b',
      },
      backgroundImage:{
        'service-image':"url('/src/assets/images/banner.jpg')"
      }
    },
  },
  plugins: [],
}
