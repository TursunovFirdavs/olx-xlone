/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-color": "#19191C",
        "secondary-dark": "#C2C2C2",
        "secondary-light": "#F6F6F6",
        "main-danger": "#F7B2B2",
        "dark-danger": "#EA3838"
      }
    },
    container: {
      padding: '5px',
      margin: 'auto',
      screens: {
        xl: '1121px'
      }
    }
  },
  plugins: [],
}