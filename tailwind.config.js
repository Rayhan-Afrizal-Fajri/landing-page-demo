/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        muted: "var(--color-muted)",
        accent1: "var(--color-accent1)",
        accent2: "var(--color-accent2)",
        accent3: "var(--color-accent3)",
      }
    }
  },
  plugins: [],
}
