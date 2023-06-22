const Textarea = {
  baseStyle: {
    fontSize: 'sm',
  },
  variants: {
    outline: ({ colorScheme }) => ({
      bg: 'white',
      _focus: {
        borderColor: `${colorScheme}.500`,
        boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`,
      },
      _active: {
        borderColor: `${colorScheme}.500`,
        boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`,
      },
    }),
    inverse: ({ colorScheme }) => ({
      bg: 'white',
      borderWidth: '1px',
      borderColor: `${colorScheme}.100`,
      _focus: {
        borderColor: `${colorScheme}.500`,
        boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`,
      },
      _active: {
        borderColor: `${colorScheme}.500`,
        boxShadow: `0 0 0 1px var(--chakra-colors-${colorScheme}-500)`,
      },
    }),
  },
  defaultProps: {
    colorScheme: 'gray',
    variant: 'outline',
  },
}

export default Textarea
