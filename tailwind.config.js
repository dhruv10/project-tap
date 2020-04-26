module.exports = {
  theme: {
    extend: {},
    textColor: {
      primary: '#5850EC',
    },
    backgroundColor: (theme) => ({
      ...theme('textColor'),
    }),
  },
  variants: {},
  plugins: [],
};
