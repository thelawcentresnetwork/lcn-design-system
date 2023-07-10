declare const colors: {
  brand: {
    legacyBlue: string
    legacyTeal: string
    legacyPink: string
    legacyOrange: string
    legacyGrey: string
    darkBlue: string
    brightBlue:
      | {
          500: string
          400: string
          accessible: string
        }
      | string
    brightTeal: string
    brightPink: string
    warmYellow:
      | {
          500: string
          400: string
          accessible: string
        }
      | string
    white:
      | {
          500: string
          400: string
          accessible: string
        }
      | string
  }
}

export default colors
