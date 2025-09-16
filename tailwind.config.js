/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pomegranate: {
          50: "#fdf2f2",
          200: "#F5B7B1",
          400: "#F1948A", 
          500: "#E74C3C",
          600: "#C0392B",
          700: "#A93226"
        }
      }
    },
  },
  plugins: [],
};