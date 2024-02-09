/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**.{woff2,js}",
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
    "./app/**/*.{js,ts,jsx,woff2}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
