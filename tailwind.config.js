/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [],
};
