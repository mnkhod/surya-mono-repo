// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./routes/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary-light-xs" : "#F8F7FF",
      "primary-light-sm" : "#C7C5EB",
      "primary-light" : "#9794D4",

      "primary" : "#3D38BC",

      "primary-dark-xs" : "#272E61",
      "primary-dark-sm" : "#212B51",
      "primary-dark" : "#142033",

      "secondary-light-xs" : "#FFFBF7",
      "secondary-light-sm" : "#FFE3C8",
      "secondary-light" : "#FFC388",

      "secondary" : "#FF8333",

      "secondary-dark-xs" : "#B57637",
      "secondary-dark-sm" : "#8C5B2A",
      "secondary-dark" : "#6B4620",

      "dark-xs" : "#0000003D",
      "dark-sm" : "#00000099",
      "dark" : "#262626",

      "light-xs" : "#0000001F",
      "light-sm" : "#00000014",
      "light" : "#0000001F",
    },
    extend: {
    },
  },
  plugins: [],
};
