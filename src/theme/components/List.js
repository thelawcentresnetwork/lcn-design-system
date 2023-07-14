import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  item: {
    borderTop: 'solid 1px',
    py: '20px',
  },
  icon: {
    iconPos: 'outside',
  },
})

export const List = defineStyleConfig({
  baseStyle,
})
