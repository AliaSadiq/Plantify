/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'testimonial-texture': "url('/src/assets/landing.jpeg')",
        'newsletter': "url('/src/assets/newsletter.jpeg')"
      },
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
          "100": "#DDE6D6",
          "200": "#8E9688",
          "300": "#99BC85",
          "400": "#9EB79E"
        },
        tadpol: {
          "500": "#7F7F43",
          "400": "#A5A55B",
          "300": "#C0C073",
          "200": "#E3E394",
          "100": "#F9F9C5"
        },
        pale: {
          "100": "#FAFAEF",
          "200": "#ECEED3",
          "300": "#D0D2A8",
        },
        ivory: "#F2F3E6",
        neutral: "#F5F5F5",
        lightgray: "#d0d7c3",
        black: "#000",
        darkgreen: "#968218",
        yolk: "#FEC467",
        pinky: "#DEADBB",
        darkbrown: '#2C0000',
      },
      spacing: {},
      fontFamily: {
        "josefin-sans": "'Josefin Sans'",
        "noto-sans-display": "'Noto Sans Display'",
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
      "lilxl": "50px",
      "3xl": "60px",
      "4xl": "80px",
      inherit: "inherit",
    },
  },
}