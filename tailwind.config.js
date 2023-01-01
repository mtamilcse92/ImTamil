/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
