/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#022176",
        white: "#FFFFFF",
        black: "#000000",
        black50: "rgba(0, 0, 0, 0.5)",
        title: "#333333",
        gradient: {
          100: "#022176",
          200: "#005AA4",
        },
        neutral: {
          50: "#F7F7F7",
          100: "#E5E5E5",
          200: "#D9D9D9",
          300: "#A3A3A3",
          400: "#666666",
          500: "#737373",
          700: "#4C4C4C",
          900: "#222222",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        "chakraveer-footer": "url('/chakraveer-footer.png')",
      },
    },
  },
  plugins: [],
};
