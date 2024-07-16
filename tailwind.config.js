/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      bottom: {
        "-23": "'-3rem", // Customize the value as per your requirement
      },
      // colors: {
      //   "regal-blue": "#243c5a",
      // },
    },
  },
  plugins: [],
};
