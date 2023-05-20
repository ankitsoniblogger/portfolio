/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      plus: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      Primary: "#262729",
      Secondary: "#F6F6F6",
      Text: "#54575D",
      Accent: "#54575D",
      white: "#FFFFFF",
      TPurple: "#785CFF45",
      TBg: "#F6F6F650",
    },
    backgroundImage: {
      "hero-pattern": "url('./src/assets/bg.jpg')",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      custom: "50%",
    },
  },

  plugins: [],
};
