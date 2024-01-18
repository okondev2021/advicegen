/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'big': {'max': '1300px'},
      // => @media (max-width: 1300px) { ... }
      'md': {'max': '1030px'},
      // => @media (max-width: 1030px) { ... }
      'tab': {'max': '790px'},
      // => @media (max-width: 1030px) { ... }
      'mobile': {'max': '500px'},
      // => @media (max-width: 430px) { ... }
    },
    letterSpacing:{
      'space': '0.4em'
    },
    fontFamily:{
      body:['Manrope']
    },
    extend: {
      colors:{
        'cyann':{
          '100':'hsl(193, 38%, 86%)',
          '200':'hsl(150, 100%, 66%)'
        },
        'neutral':{
          '100':'hsl(217, 19%, 38%)',
          '200':'hsl(217, 19%, 24%)',
          '300':'hsl(218, 23%, 16%)'
        }
      },
      boxShadow:{
        'large': '0 35px 60px -15px hsl(150, 100%, 66%)'
      }
    },
  },
  plugins: [],
}

