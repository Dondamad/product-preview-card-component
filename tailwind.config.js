/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      colors: {
        theme: {
          "dark-cyan": {
            500: "#3D8168",
            600: "#1A4032",
          },
          cream: {
            500: "#F2EAE2",
          },
          gunmetal: "#1C232B",
          "aurometal-saurus": "#6C7289",
        },
      },

      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        fraunces: ["var(--font-fraunces)"],
      },
    },
  },
  plugins: [],
};
