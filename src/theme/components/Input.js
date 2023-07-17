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
          border: '3px solid',
          borderColor: `${colorScheme}`,
        },
        _focus: {
          border: '3px solid',
          borderColor: `${colorScheme}`,
        },
        _active: {
          border: '3px solid',
          borderColor: `${colorScheme}`,
        },
      },
    }),
    outline: ({ colorScheme }) => ({
      addon: {
        fontSize: 'xs',
        bg: `${colorScheme}`,
        color: `${colorScheme}`,
        borderColor: `${colorScheme}`,
      },
      field: {
        bg: 'none',
        borderColor: `${colorScheme}`,
        border: '2px solid',
        fontSize: '2xs',
        borderRadius: 'none',
        _hover: {
          border: '3px solid',
          borderColor: `${colorScheme}`,
        },
        _focus: {
          border: '3px solid',
          borderColor: `${colorScheme}`,
        },
        _active: {
          border: '3px solid',
          borderColor: `${colorScheme}`,
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
