/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        primary: "#1877F2", // Facebook blue
        "primary-light": "#4293FF", // Lighter Facebook blue
        "primary-dark": "#0D5AC3", // Darker Facebook blue
        "section-light": "#F0F2F5", // Facebook background gray-blue
        "section-alternate": "#FFFFFF",
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
