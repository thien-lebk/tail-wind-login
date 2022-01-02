module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: '',
      'pri': '#000',
      'sec': '#666',
      'whi': '#ffffff',
      'blu': '#216fed',
      'blu-light':'#759dd9',
      'blu-hover':'#1058cb',
      'hsla-grey':'hsla(0, 0%, 100%, 0.2)',
      'hsla-whi':'hsla(0, 0%, 100%, 0.8)'
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },  
    
    extends:{
      boxShadow:{
        'primary':'0 0 60px 10px rgb(85 44 44 / 20%)',
        'login-cub':'0 0 0 60px hsl(0deg 0% 100% / 10%)'
      },
      keyframes: {
        dzmove: {
          "0%": { transform: 'rotate(45deg)' },
          "25%": { transform: "rotate(45deg) translate(2px,-4px)" },
          "50%": { transform: "rotate(45deg)" },
          "75%": { transform: "rotate(45deg) translate(2px,4px)" },
          "100%": { transform: "rotate(45deg)" },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        dzMove: "dzMove 5s linear infinite",
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    }
  },
  plugins: [],

}
