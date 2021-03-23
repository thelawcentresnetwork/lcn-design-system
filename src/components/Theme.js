import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
  fonts: {
    body: "Lato, Helvetica, sans-serif",
    heading: "Poppins, Helvetica, sans-serif",
    mono: "Menlo, monospace"
  },
  "colors": {
    "brand": {
      'Orange': '#E45E37',
      'Red': '#C90061',
      'Blue': '#425390',
      'Green': '#00838A',
    },
    "orange": {
      50: '#ffeae2',
      100: '#fbc7b9',
      200: '#f2a48d',
      300: '#eb7f61',
      400: '#E45E37',
      500: '#ca431b',
      600: '#9e3314',
      700: '#71240d',
      800: '#461405',
      900: '#1e0300',
    },
    "red": {
      50: '#ffe2f5',
      100: '#ffb1d8',
      200: '#ff7fbd',
      300: '#ff4da3',
      400: '#fe1e88',
      500: '#e5076f',
      600: '#b30056',
      700: '#81003e',
      800: '#4f0025',
      900: '#1f000e',
    },
    "blue": {
      50: '#eaf0ff',
      100: '#c9d1ec',
      200: '#a7b2da',
      300: '#8493c8',
      400: '#6274b7',
      500: '#485b9d',
      600: '#37477b',
      700: '#273259',
      800: '#151e38',
      900: '#040a19',
    },
    "green": {
      50: '#f5fafb',
      100: '#e1f0f1',
      200: '#cbe6e7',
      300: '#b3dadc',
      400: '#98cdd0',
      500: '#7abec2',
      600: '#56adb1',
      700: '#29979d',
      800: '#00838A',
      900: '#00474b',
    }
  }
})

export default Theme;
