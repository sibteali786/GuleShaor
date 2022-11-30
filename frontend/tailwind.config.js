/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [require("@tailwindcss/forms")],
  important: true,
};
