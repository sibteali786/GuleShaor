/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        secondaryColor: "var(--secondaryColor)",
      },
      textColor: {
        primaryColor: "var(--textColor1)",
        secondaryColor: "var(--tertiaryColor)",
      },
      borderColor: {
        default: "var(--color-border-default)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  important: true,
};
