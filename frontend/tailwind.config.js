// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
  
//   theme: {
//     extend: {
//       colors: {
//         white: "#fff",
//         palegreen: {
//           "50": "#FFFFFC",
//           "100": "#F9F9EB",
//           "200": "#D4E7C5",
//           "300": "#dcf4a9",
//           "400": "#b7ce6e",
//           "500": "#a0bf40",
//           "254": "#abf600",
          
//         },
//         forest: {
//           "100": "#323D43",
//           "200": "#242B30",
//         },
//         gray: {
//           "100": "#222",
//           "200": "rgba(34, 34, 34, 0.6)",
//           "300": "#cccccc",
//         },
//         navygreen: {
//           "25": '#f8fcf6',
//           "50": '#F0F4ED',
//           "100": "#DDE6D6",
//           "200": "#CBD9C1",
//           "300": "#99BC85",
//           "400": "#9EB79E",
//           "trial": "#C7D8B7"
//         },
//         tadpol: {
//           "500": "#7F7F43",
//           "400": "#A5A55B",
//           "300": "#C0C073",
//           "200": "#E3E394",
//           "100": "#F9F9C5"
//         },
//         pale: {
//           "100": "#FAFAEF",
//           "200": "#ECEED3",
//           "300": "#D0D2A8",
//         },
//         dgreen:"#97b58a",
//         glass:"#F5F6EF",
//         ivory: "#F2F3E6",
//         neutral: "#F5F5F5",
//         surmai: "#EEEEEE",
//         niga: "#e8ede7",
//         lightgray: "#d0d7c3",
//         black: "#000",
//         darkgreen: "#968218",
//         yolk: "#FEC467",
//         pinky: "#DEADBB",
//         darkbrown: '#2C0000',
//         ngreen:"#0FA958",
//         greent:"#C1E5D2",
//         gg:"#E0F7E6",
//         greentop:"#61CE95",
//         dashboard:"#8AA07C",
//         dbhover:"#768c67",
//         prom:"#8ba25d",
//         text:"#8FB081",
//         danger: "#e45c5d",
//         neon: "#DAFF8C",
//       },
//       scrollbar: {
//         thumb: '#DDE6D6',
//       },
//       spacing: {},
//       fontFamily: {
//         "josefin-sans": "'Josefin Sans'",
//         "noto-sans-display": "'Noto Sans Display'",
//       },
//       borderRadius: {
//         xl: "20px",
//         "mid-6": "17.6px",
//         "smi-8": "12.8px",
//         "pl": "20px", //plantify reserved
//         "11xl": "30px",
//       },
//     },
//     fontSize: {
//       xm:"9px",
//       xs: "12px",
//       sm: "14px",
//       xmini: "16px",
//       mini: "18px",
//       md: "20px",
//       lg: "25px",
//       xl: "28px",
//       "lil2xl": "30px",
//       "2xl": "40px",
//       "lilxl": "50px",
//       "3xl": "60px",
//       "4xl": "80px",
//       "full":"120px",
//       inherit: "inherit",
//     },
//     lineHeight: {
//       'extra-tall': '1.5', // You can adjust this value as needed
//     },
//   },
//   plugins: [
//     function ({ addUtilities }) {
//       addUtilities({
//         '.no-scrollbar': {
//           /* Hide scrollbar for Chrome, Safari, and Opera */
//           '&::-webkit-scrollbar': {
//             display: 'none',
//           },
//           /* Hide scrollbar for IE, Edge, and Firefox */
//           '-ms-overflow-style': 'none', // IE and Edge
//           'scrollbar-width': 'none',    // Firefox
//         },
//       });
//     },
//   ],
// });
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        palegreen: {
          "50": "#FFFFFC",
          "100": "#F9F9EB",
          "200": "#D4E7C5",
          "300": "#dcf4a9",
          "400": "#b7ce6e",
          "500": "#a0bf40",
          "254": "#abf600",
        },
        forest: {
          "100": "#323D43",
          "200": "#242B30",
        },
        gray: {
          "100": "#222",
          "200": "rgba(34, 34, 34, 0.6)",
          "300": "#cccccc",
        },
        navygreen: {
          "25": '#f8fcf6',
          "50": '#F0F4ED',
          "100": "#DDE6D6",
          "200": "#CBD9C1",
          "300": "#99BC85",
          "400": "#9EB79E",
          "trial": "#C7D8B7"
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
        dgreen:"#97b58a",
        glass:"#F5F6EF",
        ivory: "#F2F3E6",
        neutral: "#F5F5F5",
        surmai: "#EEEEEE",
        niga: "#e8ede7",
        lightgray: "#d0d7c3",
        black: "#000",
        darkgreen: "#968218",
        yolk: "#FEC467",
        pinky: "#DEADBB",
        darkbrown: '#2C0000',
        ngreen:"#0FA958",
        greent:"#C1E5D2",
        gg:"#E0F7E6",
        greentop:"#61CE95",
        dashboard:"#8AA07C",
        dbhover:"#768c67",
        prom:"#8ba25d",
        text:"#8FB081",
        danger: "#e45c5d",
        neon: "#DAFF8C",
      },
      fontFamily: {
        "josefin-sans": "'Josefin Sans'",
        "noto-sans-display": "'Noto Sans Display'",
      },
      borderRadius: {
        xl: "20px",
        "mid-6": "17.6px",
        "smi-8": "12.8px",
        "pl": "20px", //plantify reserved
        "11xl": "30px",
      },
      fontSize: {
        xm: "9px",
        xs: "12px",
        sm: "14px",
        xmini: "16px",
        mini: "18px",
        md: "20px",
        lg: "25px",
        xl: "28px",
        "lil2xl": "30px",
        "2xl": "40px",
        "lilxl": "50px",
        "3xl": "60px",
        "4xl": "80px",
        "full":"120px",
        inherit: "inherit",
      },
      lineHeight: {
        'extra-tall': '1.5', // You can adjust this value as needed
      },
      animation: {
        growTree: 'growTree 2s ease-out forwards',
      },
      keyframes: {
        growTree: {
          '0%': {
            transform: 'scale(0.5) translateY(100%)', // Start small and below
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1) translateY(0)', // Full size and original position
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none',    // Firefox
        },
      });
    },
  ],
});
