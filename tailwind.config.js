/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ['font-bold', 'font-normal'],  // add this
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#FF5656",
        secondary: "#1E2A38",
        Bg: "#FFF4F1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
        instrument: ['"Instrument Sans"', "sans-serif"],  // add this
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        spin: 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
};