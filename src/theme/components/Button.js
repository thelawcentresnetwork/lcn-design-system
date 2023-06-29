import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  borderRadius: 0,
  fontFamily: 'bodyAlternative',
  fontSize: '2xs',
  textTransform: 'uppercase',
})

const solid = defineStyle(({ colorScheme }) => {
  return {
    bg: `${colorScheme}.500`,
    color: `${colorScheme}.accessible`,
    _hover: { bg: `${colorScheme}.400` },
    _focus: { bg: `${colorScheme}.400` },
    _active: { bg: `${colorScheme}.400` },
    _focusVisible: { bg: `${colorScheme}.400` },
  }
})

const outline = defineStyle(({ colorScheme }) => {
  return {
    border: '2px solid',
    borderColor: `${colorScheme}.500`,
    bg: 'none',
    color: `${colorScheme}.500`,
    _hover: { bg: `${colorScheme}.500`, color: `${colorScheme}.accessible` },
    _focus: { bg: `${colorScheme}.500`, color: `${colorScheme}.accessible` },
    _active: { bg: `${colorScheme}.500`, color: `${colorScheme}.accessible` },
    _focusVisible: {
      bg: `${colorScheme}.500`,
      color: `${colorScheme}.accessible`,
    },
  }
})

const sizes = {
  long: defineStyle({
    minWidth: '30rem',
    py: '0.5rem',
  }),
  short: defineStyle({
    minWidth: '15rem',
    py: '0.5rem',
  }),
}

export const Button = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    solid,
    outline,
  },
  defaultProps: {
    colorScheme: 'brand.warmYellow',
    variant: 'solid',
    size: 'long',
  },
})
