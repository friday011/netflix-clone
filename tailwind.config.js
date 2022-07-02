const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.50) 44%,#141414 75%,#141414 100%);"
      }
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
