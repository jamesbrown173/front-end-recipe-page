/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    fontFamily: {
      outfit: ["outfit", "sans-serif"],
      youngserif: ["young-serif", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
