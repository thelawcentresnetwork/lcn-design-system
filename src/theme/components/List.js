import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  icon: {
    iconPos: 'outside',
  },
})

export const List = defineStyleConfig({
  baseStyle,
})
