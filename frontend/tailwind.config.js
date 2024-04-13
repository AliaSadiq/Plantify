/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        palegreen: {
          "50": "#FFFFFC",
          "100": "#F9F9EB",
          "200": "#E4E4D0",
          "300": "#dcf4a9",
        },
        gray: {
          "100": "#222",
          "200": "rgba(34, 34, 34, 0.6)",
        },
        navygreen: {
          "100": "#c9f470",
          "200": "#BACCBA",
          "300": "#AEC3AE",
          "400": "#9EB79E"
        },
        ivory: "#fafef2",
        lightgray: "#d0d7c3",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        xl: "20px",
        "mid-6": "17.6px",
        "smi-8": "12.8px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      mini: "18px",
      lg: "25px",
      xl: "28px",
      "2xl": "40px",
      inherit: "inherit",
    },
  },
}