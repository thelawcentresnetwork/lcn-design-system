const Button = {
  sizes: {
    long: {
      minWidth: '30rem',
      py: '0.5rem',
    },
    short: {
      minWidth: '15rem',
      py: '0.5rem',
    },
  },
  variants: {
    solid: ({ colorScheme }) => ({
      borderRadius: 'none',
      textTransform: 'uppercase',
      fontFamily: 'bodyAlternative',
      fontSize: '2xs',
      bg: `${colorScheme}.500`,
      color: `${colorScheme}.accessible`,
      _hover: { bg: `${colorScheme}.400` },
      _focus: { bg: `${colorScheme}.400` },
      _active: { bg: `${colorScheme}.400` },
      _focusVisible: { bg: `${colorScheme}.400` },
    }),
    outline: ({ colorScheme }) => ({
      borderRadius: 'none',
      textTransform: 'uppercase',
      fontFamily: 'bodyAlternative',
      border: '2px solid',
      borderColor: `${colorScheme}.500`,
      bg: 'none',
      fontSize: '2xs',
      color: `${colorScheme}.500`,
      _hover: { bg: `${colorScheme}.500`, color: `${colorScheme}.accessible` },
      _focus: { bg: `${colorScheme}.500`, color: `${colorScheme}.accessible` },
      _active: { bg: `${colorScheme}.500`, color: `${colorScheme}.accessible` },
      _focusVisible: {
        bg: `${colorScheme}.500`,
        color: `${colorScheme}.accessible`,
      },
    }),
  },
  defaultProps: {
    variant: 'solid',
    size: 'long',
    colorScheme: 'brand.warmYellow',
  },
}

export default Button
