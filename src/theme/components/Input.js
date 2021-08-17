const Input = {
  variants: {
    outline: {
      field: {
        bg: 'white',
        _focus: {
          borderColor: "brand.Green",
          boxShadow: '0 0 0 1px var(--chakra-colors-brand-Green)'
        },
        _active: {
          borderColor: "brand.Green",
          boxShadow: '0 0 0 1px var(--chakra-colors-brand-Green)'
        }
      }
    },
    inverse: {
      field: {
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
      },
      addon: {
        border: '1px solid',
        borderColor: 'green.100',
        bg: 'green.100'
      }
    }
  }
}

export default Input


