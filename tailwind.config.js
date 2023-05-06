/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#202020",
          200: "#A3A3A3",
          300: "#DEDEDE",
        },
        secondary: {
          100: "#0570EB",
        },
      },
    },
  },
  plugins: [],
};
