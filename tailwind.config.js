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
      width: {
        '6/5': '120%'
      },
      height: {
        '1/3': '33.33%',
        '2/5': '40%',
        '3/5': '60%',
        'half': '50%'
      },
      borderRadius: {
        oval: '50%'
      },
      inset: {
        '-1/10': '-10%',
        '-3/20': '-15%',
        '-17/100': '-17%',
        '80vh': '80vh',
        '88vh': '88vh',
        '120vh': '120vh',
        '150vh': '150vh',
        '160vh': '160vh',
      },
      rotate: {
        7: '7deg',
      },
      zIndex: {
        2: 2,
        3: 3,
        4: 4,
      }
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
