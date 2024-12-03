/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif",
      roboto: ['"Roboto"', 'sans-serif'], 
    },
    extend: {
      fontWeight: {
        100: 100,
        300: 300, 
        400: 400,
        500: 500,
        700: 700,
        900: 900,
      },
      animation: {
        blob: "blob 7s infinite",
        'rotate-bottom-25': 'animate 25s linear infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        animate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '1',
            borderRadius: '0',
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(720deg)',
            opacity: '0',
            borderRadius: '50%',
          },
        },
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #8f94fb, #4e54c8)',
      },
    },
  },
  plugins: [],
}
