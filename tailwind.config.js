module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#121212',
        aside: '#282828',
        unfocus: '#e6e6e6',
        focus: '#fefefe',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
