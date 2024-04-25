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
          "200": "#D4E7C5",
          "300": "#dcf4a9",
        },
        gray: {
          "100": "#222",
          "200": "rgba(34, 34, 34, 0.6)",
        },
        navygreen: {
          "25": '#f8fcf6',
          "50": '#EDF6E9',
          "100": "#E1F0DA",
          "200": "#BFD8AF",
          "300": "#99BC85",
          "400": "#9EB79E"
        },
        ivory: "#F6F6F6",
        lightgray: "#d0d7c3",
        black: "#000",
        darkgreen: "#0B473F",
        yolk: "#FEC467",
        pinky: "#DEADBB"
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
      md: "20px",
      lg: "25px",
      xl: "28px",
      "2xl": "40px",
      "3xl": "60px",
      "4xl": "80px",
      inherit: "inherit",
    },
  },
}