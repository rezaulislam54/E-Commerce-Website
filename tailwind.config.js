/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme_primary: '#000000',
        theme_secondary: '#FFFFFF',
      }
    },
  },
  plugins: [
     require('daisyui'),
  ],
}

