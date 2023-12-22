/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "",
          400: "",
          300: "",
          200: "",
          100: "",
        },
        secondary: {
          500: "",
          400: "",
          300: "",
          200: "",
          100: "",
        },
      },
      container: {
        center: true,
        padding: "6rem",
      },
      borderRadius: {
        normal: "",
        fix:""
      },
      fontFamily: {},
      boxShadow: {},
    },
  },
  plugins: [],
};
