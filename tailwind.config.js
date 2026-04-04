/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "g-dark": "#1a5c1a",
        "g-mid": "#2d8a2d",
        "g-light": "#3cb33c",
        "g-bright": "#4cd94c",
      },
      fontFamily: {
        sans: [
          "NunitoSans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
