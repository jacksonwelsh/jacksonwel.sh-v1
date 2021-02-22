module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      hand: ['Rock\\ Salt', 'serif']
    },
    extend: {
      colors: {
        github: '#181717'
      },
      screens: {
        'xs': '576px'
      }
    },
  },
  variants: {
    extend: {
      borderStyle: ['dark'],
    },
  },
  plugins: [],
}
