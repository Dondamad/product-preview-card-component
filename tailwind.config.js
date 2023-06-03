/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "376px" },
        desktop: { max: "1440px" },
      },
      colors: {
        primary: {
          500: "#3D8168",
          600: "#1A4032",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        serif: "var(--font-fraunces)",
      },
    },
  },
  plugins: [],
};
