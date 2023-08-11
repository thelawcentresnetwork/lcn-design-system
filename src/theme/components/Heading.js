const Heading = {
  variants: {
    h1: {
      fontSize: 'clamp(5.4rem, calc(4.13rem + 3.54vw), 5.6rem)',
      lineHeight: 1.2,
      fontWeight: '400',

      textTransform: 'uppercase',
      fontFamily: 'Black Han Sans',
    },
    h2: {
      fontSize: 'clamp(4.1rem, calc(3.24rem + 0.65vw), 4.4rem)',
      lineHeight: 1.33,
      fontWeight: 400,
      fontFamily: 'Black Han Sans',
      textTransform: 'uppercase',
    },

    h2Alt: {
      fontSize: 'clamp(3.1rem, calc(2.16rem + 0.43vw), 3.4rem)',
      lineHeight: 1.33,
    },

    h3: {
      fontSize: 'lg',
      lineHeight: 1.33,
      fontWeight: 500,
    },
    h4: {
      fontSize: 'clamp(1rem, calc(0.65rem + 2.39vw), 2.5rem)',
      lineHeight: 1.33,
      fontWeight: 500,
    },
  },
}

export default Heading
