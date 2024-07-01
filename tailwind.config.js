/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1b1b1b",
        secondary: "#7ebbf2",
      },
    },
    screens: {
      xs: "620px",
      sm: "768px",
      md: "880px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
