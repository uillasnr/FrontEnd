/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        k2d: ['K2D', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "#BFB9FF",
        secondary: "#48409E",
        primaryDark: "#6F6F6F",
        light: "#F2F2F2",
        error: "#FF7979",
        success: "#2BA700",
        warning: "#FFBA53",
      },
      backgroundColor: {
        backgroundPrimary: "#F1F0FF",
        secondary: "#48409E",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
