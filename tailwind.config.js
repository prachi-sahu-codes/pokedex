/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm380: "380px",
      sm: "640px",
      md700: "700px",
      md: "768px",
      lg: "1024px",
      lg1150: "1150px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
