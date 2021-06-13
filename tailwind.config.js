module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    animation: {
      fadeIn: "fadeIn 1s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    }
  },
  variants: {
    extend: {},
    animation: ["motion-safe"],
  },
  plugins: [],
}

