/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        mainButton: "#0189FF",
        secondGray: "#ADB7C4",
        grayMain: "#F8F9FD",
        navBarText: "#4D5661",
      },

      fontFamily: {
        HankenGrotesk: ["HankenGrotesk", "sans-serif"],
      },

      screens: {
        xs: "375px",
        // => @media (min-width: 375px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1536",
      },
    },
  },
  plugins: [],
};
