/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['Yekan', 'sans-serif', ],
      display: ['Yekan', 'sans-serif',],
    },
    extend: {
       colors: {
      'custom_brown':'#a47e50',
      'custom_darkbrown':'#382d1d'
    },
    borderRadius: {
      'custom-soft':'130px',
      'custom-soft-small':'90px'
    }
    },
    
   
  },
  plugins: [require("daisyui")],
}