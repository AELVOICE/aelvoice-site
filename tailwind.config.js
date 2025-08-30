/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ael: {
          primary: "#800020",
          dark: "#4B0010",
          light: "#A31A42"
        }
      }
    },
  },
  plugins: [],
};
