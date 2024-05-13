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
    h1Conference2024: {
      fontFamily: 'Unbounded',
      fontSize: '120px',
      lineHeight: '162px',
      fontWeight: '800',
      letterSpacing: "1.2px",
      textTransform: "uppercase"
    },
    h2Conference2024: {
      fontFamily: 'Unbounded',
      fontSize: '60px',
      lineHeight: '62.4px',
      fontWeight: '800',
      letterSpacing: "0.6px"
    },
    h3Conference2024: {
      fontFamily: 'Unbounded',
      fontSize: '28px',
      lineHeight: '34.16px',
      fontWeight: '400',
      letterSpacing: "0.28px"
    },
    h4Conference2024: {
      fontFamily: 'Unbounded',
      fontWeight: '800',
      fontSize: '40px',
      lineHeight: '54px',
      letterSpacing: "0.4px",
      textTransform: "uppercase"
    },
  },
}

export default Heading
