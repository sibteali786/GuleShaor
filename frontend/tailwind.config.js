/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      stylish: "Pacifico",
    },
    extend: {
      backgroundColor: {
        secondaryColor: "var(--secondaryColor)",
        tertiaryColor: "var(--bg-tertiary-color)",
      },
      textColor: {
        primaryColor: "var(--textColor1)",
        secondaryColor: "var(--tertiaryColor)",
        tertiaryColor: "var(--bg-tertiary-color)",
      },
      borderColor: {
        default: "var(--color-border-default)",
      },
    },
    screens: {
      xs: { max: "570px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/forms")],
  important: true,
};
