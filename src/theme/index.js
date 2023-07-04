import { extendTheme } from '@chakra-ui/react'

import colors from './foundations/colors'
import { fonts, fontSizes } from './foundations/fonts'
import globalStyles from './foundations/globalStyles'

import Badge from './components/Badge'
import Menu from './components/Menu'
import Tooltip from './components/Tooltip'

import Form from './components/Form'
import FormLabel from './components/FormLabel'
import Input from './components/Input'
import NumberInput from './components/NumberInput'

import Radio from './components/Radio'

import Checkbox from './components/Checkbox'
import Switch from './components/Switch'

import Textarea from './components/Textarea'

import { Button } from './components/Button'
import Text from './components/Text'
import Heading from './components/Heading'

import Tabs from './components/Tabs'

import Drawer from './components/Drawer'
// https://github.com/chakra-ui/chakra-ui/tree/75edcf41e7ff4acc2569f2169949063c164d8f6e/packages/theme/src/components

const Theme = extendTheme({
  styles: globalStyles,
  colors,
  fonts,
  fontSizes,
  components: {
    Button,
    Text,
    Heading,
    Badge,
    Menu,
    Tooltip,
    FormLabel,
    Form,
    Textarea,
    NumberInput,
    Input,
    Checkbox,
    Drawer,
    Tabs,
    Switch,
    Radio,
  },
})

export default Theme
