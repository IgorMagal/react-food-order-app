/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-7deg) scale(0.8)" },
          "50%": { transform: "rotate(7deg) scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
