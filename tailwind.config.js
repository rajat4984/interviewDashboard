/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cstm-bg-light-gray": "#202028",
        "icon-bg": "#46474c",
        "dashboard-card-bg": "#202129",
      },
    },
  },
  plugins: [],
};
