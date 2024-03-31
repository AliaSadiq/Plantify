/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        palegoldenrod: {
          "100": "#e7fbbb",
          "200": "#e6fbbb",
          "300": "#dcf4a9",
        },
        gray: {
          "100": "#222",
          "200": "rgba(34, 34, 34, 0.6)",
        },
        yellowgreen: {
          "100": "#c9f470",
          "200": "#b3dd5c",
          "300": "#b0db57",
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
      mini: "15px",
      "5xl": "24px",
      lgi: "19px",
      "mid-5": "17.5px",
      "9xl-8": "28.8px",
      "4xl": "23px",
      inherit: "inherit",
    },
  },
}