/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        swift: "url(/assets/background.png)"
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}
