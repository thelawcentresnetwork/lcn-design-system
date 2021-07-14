const Button = {
  baseStyle: {
    fontWeight: "600",
  },
  sizes: {
    md: {
      fontSize: 'sm'
    }
  },
  variants: {
    solid: ({ colorScheme }) => ({
      borderLeftWidth: "1px",
      borderRightWidth: "3px",
      borderBottomWidth: "3px",
      bg: `${colorScheme}.400`,
      borderColor: `${colorScheme}.500`,
      _hover: { bg: `${colorScheme}.500` },
      _focus: { bg: `${colorScheme}.500` },
      _active: { bg: `${colorScheme}.500` }
    }),
    outline: ({ colorScheme }) => ({
      fontWeight: "400",
      color: `${colorScheme}.500`,
      _hover: { bg: `${colorScheme}.50` },
      _active: { bg: `${colorScheme}.50` },
      _focus: { bg: `${colorScheme}.50` }
    }),
    brand: ({ colorScheme }) => ({
      borderRadius: "3xl",
      borderWidth: "3px",
      borderColor: `${colorScheme}.500`,
      borderTopRightRadius: "0",
      color: `${colorScheme}.500`,
      bg: "transparent",
      fontFamily: "Poppins, Helvetica, sans-serif",
      px: "10",
      py: "4",
      fontWeight: "600"
    })
  },
  defaultProps: {
    colorScheme: 'green'
  }
}

export default Button;