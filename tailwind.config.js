module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
  colors: {
    // LIGHT THEME
    bglight:  "#F8FAFF",  // very pale indigo‑tint background
    marrslight: "#1E66F5", // primary accent ➊
    marrsgreen: "#0C4EE8", // primary accent hover
    marrsdark:  "#0739B4", // accent pressed

    cardlight: "#EEF2FF",  // card / surface

    // DARK THEME
    bgdark:  "#0E1A2D",    // dark navy background
    carrilight: "#5CC8FF", // accent on dark ➊
    carrigreen: "#1FA5FF", // accent hover
    carridark: "#0072D9",  // accent pressed

    carddark: "#16243B",   // dark card / surface
    textlight: "#F8FAFF",  // text on dark
  },
}

  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
