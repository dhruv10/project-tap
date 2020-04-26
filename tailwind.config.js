module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#5850EC',
        'dark-primary': '#171A1B',
        'dark-blue': '#170F59',
        'light-blue': '#2F3676',
        'light-pink': '#FF3297'
      },
    },
    textColor: (theme) => ({
      ...theme('colors'),
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {},
  plugins: [],
};
