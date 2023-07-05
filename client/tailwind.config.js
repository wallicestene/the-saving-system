/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        Montserrat: "Montserrat",
        Poppins: "Poppins"
      },
      width:{
        500: "500px",
        600: "700px"
      }
    },
  },
  plugins: [],
}