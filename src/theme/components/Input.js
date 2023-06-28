const Input = {
  variants: {
    default: ({ colorScheme }) => ({
      addon: {
        fontSize: 'xs',
        bg: `${colorScheme}`,
        color: `${colorScheme}`,
        borderColor: `${colorScheme}`,
      },
      field: {
        bg: 'white',
        fontSize: '2xs',
        borderRadius: 'none',
        _hover: {
          border: '2px solid',
          borderColor: `${colorScheme}`,
        },
        _focus: {
          border: '2px solid',
          borderColor: `${colorScheme}.500`,
        },
        _active: {
          border: '2px solid',
          borderColor: `${colorScheme}.500`,
        },
      },
    }),
  },
  defaultProps: {
    colorScheme: 'brand.darkBlue',
    variant: 'default',
  },
}

export default Input
