/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'nav-green': '#dbe0d1',
          'light-black': "#222222",
          'sage-200': "#bac4a7",
          'sage-100': "#F2F4EF"
        },
        fontFamily: {
          josefins: ["Josefin Sans", "sans-serif"],
        }
    },
  },
  plugins: [],
}

