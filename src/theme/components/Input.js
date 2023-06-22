const Input = {
  variants: {
    outline: ({ colorScheme }) => ({
      addon: {
        fontSize: 'xs',
        bg: `${colorScheme}.50`,
        color: `${colorScheme}.500`,
        borderColor: `${colorScheme}.200`,
      },
      field: {
        borderColor: `${colorScheme}.200`,
        bg: 'white',
        fontSize: 'sm',
        _hover: {
          borderColor: `${colorScheme}.500`,
          boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`,
        },
        _focus: {
          borderColor: `${colorScheme}.500`,
          boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`,
        },
        _active: {
          borderColor: `${colorScheme}.500`,
          boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`,
        },
      },
    }),
  },
  defaultProps: {
    colorScheme: 'gray',
    variant: 'outline',
  },
}

export default Input
