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
    },
  },
}

export default Drawer