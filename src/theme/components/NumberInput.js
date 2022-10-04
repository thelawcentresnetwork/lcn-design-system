const NumberInput = {
  variants: {
    outline: ({ colorScheme }) => ({
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
      stepper: {
        bg: 'white',
      },
    }),
  },
  defaultProps: {
    colorScheme: 'gray',
    variant: 'outline',
  },
}

export default NumberInput
