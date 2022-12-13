/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        netflix: '#d81f26'
      }
    }
  },

  plugins: [require('tailwind-scrollbar-hide')]
}
