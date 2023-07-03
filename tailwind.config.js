/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        darkblue: "#2d3d8b",
        lightblue: "#7fbbca",
        beige: "#f5efe0",
        neongreen: "#7feb0a",
        yellow_bg: "#eee98d",
        dark_yellow: "#c2be72",
        darkest_yellow: "#adaa68",
        pink: "#ff6161",
        aqua: "#b9efe1",
        blue: "#8fb8e2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};