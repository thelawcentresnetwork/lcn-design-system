import { extendTheme } from "@chakra-ui/react"

import colors from "./foundations/colors"
import fonts from "./foundations/fonts"

import Badge from "./components/Badge"
import Menu from "./components/Menu"
import Tab from "./components/Tab"
import Tooltip from "./components/Tooltip"

import FormLabel from "./components/FormLabel"
import Input from "./components/Input"
import Textarea from "./components/Textarea"

import Button from "./components/Button"
import Text from "./components/Text"
import Heading from "./components/Heading"

import Drawer from "./components/Drawer"

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
    Tooltip,
    FormLabel,
    Textarea,
    Input,
    Drawer
  }
})

export default Theme;
