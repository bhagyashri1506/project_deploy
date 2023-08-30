/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        space:['Space Grotesk']
      }
    },
    fontSize: {
      xs:['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['32px', '40px'],
      h4: ['24px', '35px'],
      hh2: ['40px', '44px'],
    }
  },
  plugins: [],
}

