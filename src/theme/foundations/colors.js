const colors = {
  brand: {
    legacyBlue: '#425390',
    legacyTeal: '#00838A',
    legacyPink: '#C90061',
    legacyOrange: '#E45E37',
    legacyGrey: '#7A7D84',
    darkBlue: '#0B0768',
    brightBlue: {
      500: '#574CFF',
      400: '#574CFFCC',
      accessible: '#FFF',
    },
    brightTeal: '#4CDED7',
    brightPink: '#FF4476',
    warmYellow: { 500: '#FCC24B', 400: '#FCC24BCC', accessible: '#0B0768' },
    white: { 500: '#FFF', 400: '#FFFFFFCC', accessible: '#0B0768' },
    conference2024: { lilac: '#C188FC', nearlyBlack: '#032E1A', yellow: '#F0F423', lightBeige: '#F4E6DB', darkBrown: '#521B07', lightBrown: '#CD8E5B', red: '#FF4603', black: '#000000' }
  },
}

export function getColor(key) {
  const keys = key.split('.');
  let colorObject = colors.brand[keys[0]] ? colors.brand : colors;

  for (const k of keys) {
    if (colorObject[k] === undefined) {
      return null;
    }
    colorObject = colorObject[k];
  }

  return colorObject;
}

export default colors