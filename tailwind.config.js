/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing:{
      'space': '0.4em'
    },
    fontFamily:{
      body:['Manrope']
    },
    fontSize:{
      'xxsm' : '10px'
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
    },
  },
  plugins: [],
}

