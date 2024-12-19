/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        reactart: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
}

