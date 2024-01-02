/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      colors: {
        primary: "#f5f5f3",
        secondary: "#767676",
        colorBlack: "#262626",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
