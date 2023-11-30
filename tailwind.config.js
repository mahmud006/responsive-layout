/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      screens: {
        "tablet" : '640px',
        'laptop' : '1024px',
        'desktop' : '1366px'
      },
      backgroundImage: {
        'shape1': "url('./assets/Shape-bg.svg')"
      },
      fontFamily:{
        'roboto': ['Roboto']
      },
      fontSize: {
        'logo':['3rem', {
          lineHeight: '2rem',
          // letterSpacing: '-0.01em',
          fontWeight: '800',
        }],
        'menu':['1rem', {
          lineHeight: '1.5rem',
          // letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'heading':['3rem', {
          lineHeight: '2rem',
          // letterSpacing: '-0.01em',
          fontWeight: '800',
        }],
        'subheading':['2rem', {
          lineHeight: '2rem',
          // letterSpacing: '-0.01em',
          fontWeight: '800',
        }],
      },
      colors: {
        'brand': '#FFF',
        'subheading': '#CBD5E1'
        
      },
      spacing: {
        // '1': '2.75rem',
      },
      boxShadow: {
        'phone': '0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

