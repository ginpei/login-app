const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      ...colors,
      ginpen: "#036",
    },
    extend: {},
  },
  plugins: [],
};
