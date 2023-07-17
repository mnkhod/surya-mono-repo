// tailwind.config.js

// pm-1 - 4px
// pm-1.5 - 6px
// pm-2 - 8px
// pm-3 - 12px
// pm-4 - 16px
// pm-5 - 20px
// pm-6 - 24px
// pm-7 - 28px
// pm-8 - 32px
// pm-9 - 36px
//
// text-xs - 12px 
// text-sm - 14px 
// text-base - 16px 
// text-lg - 18px 

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
    "./routes/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "serif"],
      "rubik-medium": ["Rubik-Medium", "serif"],
      "rubik-bold": ["Rubik-Bold", "serif"],
    },
    extend: {
      colors: {
        "primary-light-xs": "#F8F7FF",
        "primary-light-sm": "#C7C5EB",
        "primary-light": "#9794D4",

        "primary": "#3D38BC",

        "primary-dark-xs": "#272E61",
        "primary-dark-sm": "#212B51",
        "primary-dark": "#142033",

        "secondary-light-xs": "#FFFBF7",
        "secondary-light-sm": "#FFE3C8",
        "secondary-light": "#FFC388",

        "secondary": "#FF8333",

        "secondary-dark-xs": "#B57637",
        "secondary-dark-sm": "#8C5B2A",
        "secondary-dark": "#6B4620",

        // on-light-mode
        "dark-low": "#0000003D",
        "dark-med": "#00000099",
        "dark-high": "#262626",

        // on-dark-mode
        "light-low": "#0000001F",
        "light-med": "#00000014",
        "light-high": "#0000001F",

        "back-light-primary": "#FFFFFF",
        "back-light-secondary": "#F5F5FA",
        "back-light-thirtiary": "#F0F0F7",

        "back-dark-primary": "#142033",
        "back-dark-secondary": "#212B51",
        "back-dark-thirtiary": "#2D3070",

        "stroke": "#00000014",
        "stroke-light": "#0000001F",

        "feedback-info": "#0055FF",
        "feedback-success": "#00BF70",
        "feedback-warning": "#F2CA00",
        "feedback-error": "#FF7253",
      },
    },
  },
  plugins: [],
};
