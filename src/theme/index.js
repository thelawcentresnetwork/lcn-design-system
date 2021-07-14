import { extendTheme } from "@chakra-ui/react"

import colors from "./foundations/colors"
import fonts from "./foundations/fonts"

import Badge from "./components/Badge"
import Menu from "./components/Menu"
import Tab from "./components/Tab"
import Tooltip from "./components/Tooltip"

import Button from "./components/Button"
import Text from "./components/Text"
import Heading from "./components/Heading"

const Theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
    Text,
    Heading,
    Badge,
    Menu,
    Tab,
    Tooltip
  }
})

console.log(Theme)

export default Theme;
