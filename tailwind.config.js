/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       colors: {
      'custom_brown':'#a47e50',
      'custom_darkbrown':'#382d1d'
    },
    },
   
  },
  plugins: [require("daisyui")],
}