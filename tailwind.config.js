/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "orange-1": "#F69000",
        },
        fontFamily: {
          dmsans: ["DM Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
        },
        content: {
          evolvetext: "url('./assets/EvolveText.png')",
          abstractwaves: "url('./assets/AbstractWaves.png')",
          sparkles: "url('./assets/Sparkles.png')",
          circles: "url('./assets/Circles.png')",
        },
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
    plugins: [],
  };