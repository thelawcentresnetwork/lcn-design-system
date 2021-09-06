const Tabs = {
    baseStyle: ({ colorScheme }) => ({
        tab: {
            color: "gray.400",
            fontWeight: "500",
            px: "6",
            _focus: { outline: 0 },
            _active: { outline: 0, bg: `${colorScheme}.50` },
            _hover: { color: `${colorScheme}.500`, borderColor: `${colorScheme}.500` },
            _selected: { outline: 0, color: `${colorScheme}.500`, borderColor: `${colorScheme}.500` },
        }
    }),
    variants: {
        line: ({ colorScheme }) => ({
            tab: {
                borderBottomWidth: '4px',
                _focus: { outline: "0", boxShadow: '0' },
                marginBottom: "-4px",
                _selected: { borderColor: `${colorScheme}.400` },
            },
            tablist: {
                borderBottomWidth: '4px',

            }
        })
    },
    defaultProps: {
        colorScheme: "green"
    }
}

export default Tabs
