module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#5850EC',
        'dark-primary': '#171A1B',
        'dark-blue': '#170F59',
        'light-blue': '#2F3676',
        'light-pink': '#FF3297',
        'txt-gray': '#C6C1B9',
      },
      width: {
        '6/5': '120%',
        '7/5': '130%',
        half: '50%',
      },
      height: {
        '1/3': '33.33%',
        '2/5': '40%',
        '3/5': '60%',
        '3/4': '70%',
        '4/5': '80%',
        half: '50%',
      },
      borderRadius: {
        oval: '50%',
      },
      inset: {
        '-1/10': '-10%',
        '-1/120': '-11.5%',
        '-3/20': '-15%',
        '-17/100': '-17%',
        '-1/5': '-20%',
        '75vh': '75vh',
        '88vh': '88vh',
        '120vh': '120vh',
        '150vh': '150vh',
        '160vh': '160vh',
        '170vh': '170vh',
        '180vh': '180vh',
        '10': '10px',
      },
      // rotate: {
      //   7: '7deg',
      // },
      zIndex: {
        2: 2,
        3: 3,
        4: 4,
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
  purge: false,
};
