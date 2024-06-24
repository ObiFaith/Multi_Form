/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: colors.white,
      gray: "#DDDDDD",
      black: "#1A0710",
      pink: '#EF498F',
      blue: '#1B1F3B'
    },
    extend: {
      colors: {
        'error': '#FC3A3A',
        'primary': "#5932EA",
        'success': '#6BC62D',
      },
    },
  },
  plugins: [],
}