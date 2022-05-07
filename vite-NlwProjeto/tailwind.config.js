module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:
      {
        brand:{
        300: '#5c96f2',
        500: '#4287f5'
        }
      },
      boderRadius: {
        md: '4px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  plugins: [
    require('@tailwindcss/forms'), 
    require('tailwind-scrollbar'),
  ],
}
}
