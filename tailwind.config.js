/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainGray: "#3D3F3C",
        mainOrange: "#FF6000",
        mainOrangeSecond: "#fc9657",
        secondGray: "#686967",
        thirdGray: "#383A37",
        fourthGray: "#464845",
        fifthGray: "#DCDCDC",
        sixthGray: "#6B6D6A",
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
