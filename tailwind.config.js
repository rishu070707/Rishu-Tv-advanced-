/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brandBg: '#212426',
        cardBg:  '#343739',
        accent:  '#f9d3b4',
      },
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        raleway:['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

