const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{jsx,tsx}", "./src/**/*.{jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      ginpen: "#036",
    },
    extend: {},
  },
  plugins: [],
};
