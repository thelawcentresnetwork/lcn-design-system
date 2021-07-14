import { extendTheme } from "@chakra-ui/react"

import styles from "./styles"
import colors from "./colors"
import Button from "./components/Button"

const Theme = extendTheme({
  styles,
  colors,
  components: {
    Button
  }
})

export default Theme;
