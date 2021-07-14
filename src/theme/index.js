import { extendTheme } from "@chakra-ui/react"

import colors from "./foundations/colors"
import fonts from "./foundations/fonts"
import Button from "./components/Button"

const Theme = extendTheme({
  colors,
  fonts,
  components: {
    Button
  }
})

console.log(Theme)

export default Theme;
