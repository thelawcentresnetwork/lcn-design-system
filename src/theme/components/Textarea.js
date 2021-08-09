const Textarea = {
  variants: {
    outline: {
      _focus: {
        borderColor: "brand.Green",
        boxShadow: '0 0 0 1px var(--chakra-colors-brand-Green)'
      },
      _active: {
        borderColor: "brand.Green",
        boxShadow: '0 0 0 1px var(--chakra-colors-brand-Green)'
      }
    },
    inverse: {
      bg: 'white',
      borderWidth: '1px',
      borderColor: 'green.100',
      _focus: {
        borderColor: "brand.Green",
        boxShadow: '0 0 0 2px var(--chakra-colors-brand-Green)'
      },
      _active: {
        borderColor: "brand.Green",
        boxShadow: '0 0 0 2px var(--chakra-colors-brand-Green)'
      }
    }
  },
}

export default Textarea


