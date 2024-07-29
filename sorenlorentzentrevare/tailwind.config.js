/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightBrown: '#E1B184',
        darkBrown: '#856B0F',
      },
      height:{
          'screen-half': '75vh',
      },
      width:{
        '116': '600px',
      },
      backgroundImage: {
        'factory': "url('./images/bg.png')",
        'working': "url('./images/treverk.png')",
        'employee1': "url('./images/image1.png')",
        'employee2': "url('./images/image2.jpg')",
      }
    },
  }
}

