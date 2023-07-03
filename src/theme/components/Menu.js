const Menu = {
  baseStyle: () => ({
    button: {
      fontFamily: 'Anek Latin, sans-serif',
      textTransform: 'uppercase',
      color: 'brand.darkBlue',
      borderColor: 'brand.darkBlue',
      padding: '0.5rem',
      border: 'none',
      _active: { border: 'solid 1px ', borderColor: 'brand.darkBlue' },
      _focus: { border: 'solid 1px ', borderColor: 'brand.darkBlue' },
    },
    list: {
      py: '0',
      px: '3',
      padding: '1rem 1rem 0.5rem 1rem',
      borderRadius: 'none',
      fontFamily: 'Anek Latin, sans-serif',
      bg: 'brand.warmYellow.500',
      color: 'brand.darkBlue',
      position: 'relative',
      transform: 'translateX(-12%) !important',

      _after: {
        content: '""',
        position: 'absolute',
        bg: 'brand.warmYellow.500',
        height: '42px',
        width: '80%',
        left: '0px',
        bottom: -10,
      },
    },
    item: {
      fontSize: '4xs',
      bg: 'brand.warmYellow',
      lineHeight: '1.2rem',
      maxWidth: '16ch',
      textWrap: 'wrap',
      _hover: { textDecoration: `underline` },
      _active: { textDecoration: `underline` },
      _focus: { textDecoration: `underline` },
    },

    divider: {
      borderColor: 'brand.darkBlue',
      width: '80%',
    },
    groupTitle: {
      _first: { mt: '3' },
      mx: '3',
      fontSize: '4xs',
      paddingBottom: 0,
    },
  }),
}

export default Menu
