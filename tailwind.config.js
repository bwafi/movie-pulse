/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#00ADB5",
        "dark-teal": "#006B71",
        grey: "#aabbcc",
        black: "#21201E",
        "green-black": "#222831",
        "soft-black": "#393E46",
        white: "#EEEDED",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
