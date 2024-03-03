/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**.{woff2,js}",
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
    "./app/**/*.{js,ts,jsx,woff2}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        22: "repeat(22, minmax(0, 1fr))",
      },
      screens: {
        "4sm": "320px",
        "3sm": "375px",
        "2sm": "425px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
