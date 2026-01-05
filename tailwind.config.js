/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C62828",     // merah geprek
        secondary: "#FBC02D",   // yellow
        tertiary: "#1D1D1D",    // hitam
        muted: "#F5F5F5",
        accent1: "#F57C00",
        accent2: "#6D4C41"
      }
    }
  },
  plugins: [],
}
