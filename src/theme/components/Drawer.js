const Drawer = {
  variants: {
    nonBlocking: {
      parts: ['dialog, dialogContainer'],
      dialog: {
        pointerEvents: 'auto',
      },
      dialogContainer: {
        pointerEvents: 'none',
      },
      header: {
        fontSize: "xl",
        fontWeight: "700"
      }
    },
  },
}

export default Drawer