const Menu = {
  baseStyle: ({ colorScheme }) => ({
    list: {
      py: '0',
      px: '3',
    },
    item: {
      fontSize: 'sm',
      color: 'gray.600',
      borderRadius: 'md',
      _hover: { bg: `${colorScheme}.50`, color: `${colorScheme}.500` },
      _active: { bg: `${colorScheme}.50` },
      _focus: { bg: `${colorScheme}.50` },
      _first: { mt: '3' },
      _last: { mb: '3' },
    },
    groupTitle: {
      _first: { mt: '3' },
      mx: '3',
    },
  }),
  defaultProps: {
    colorScheme: 'green',
  },
}

export default Menu
