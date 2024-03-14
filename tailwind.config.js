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
        "secondary-dark": "#C2C2C2"
      }
    },
    container: {
      padding: '5px',
      screens: {
        xl: '1121px'
      }
    }
  },
  plugins: [],
}