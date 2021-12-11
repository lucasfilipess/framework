const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    options: {
    },
  },
};
