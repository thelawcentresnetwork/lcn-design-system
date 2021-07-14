const Tab = {
  baseStyle: ({ colorScheme }) => ({
    color: "gray.400",
    fontFamily: "Poppins, Helvetica, sans-serif",
    fontWeight: "600",
    px: "6",
    _focus: { outline: "none" },
    _hover: { color: `${colorScheme}.500`, borderColor: `${colorScheme}.500` },
    _selected: { color: `${colorScheme}.500`, borderColor: `${colorScheme}.500` }
  })
}

export default Tab