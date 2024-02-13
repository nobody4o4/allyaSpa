/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        neutralColor:'#E5FEF9',
        primaryColor:'#24C9BF'
      }
    },
  },
  plugins: [],
  
};
