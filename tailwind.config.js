module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'fade-in': 'fade-in 0.5s ease-in',
      },
      colors: {
        brand: {
          '50': '#ECFDF5',
          '100': '#D1FAE5',
          '200': '#A7F3D0',
          '300': '#6EE7B7',
          '400': '#34D399',
          '500': '#10B981',
          '600': '#059669',
          '700': '#047857',
          '800': '#065F46',
          '900': '#064E3B',
        },
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

