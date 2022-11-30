// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purpleC: "#2B2B2B",
        bgColor: "#E1DBC3",
        purpleC2: "#333",
        purpleC3: "#2B2B2B",
        purpleC4: "#333",
        blueC: "#FC7DAD", //3
        blueC2: "#6397E5",
        pinkC: "#794CFD",
        grayC: "#696F79",
        pinkC2: "#7854FB", //1
        pinkC3: "#3246F5", //2
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
