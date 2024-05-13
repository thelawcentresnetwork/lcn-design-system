import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
  borderRadius: 0,
  fontFamily: 'bodyAlternative',
  fontSize: '2xs',
  textTransform: 'uppercase',
  textDecoration: 'none',
  textWrap: 'wrap',
  pr: '10px',
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

const conference2024 = defineStyle(({ colorScheme }) => {
  return {
    border: '2px solid',
    fontFamily: "Unbounded",
    fontSize: "22px",
    lineHeight: "26.84px",
    letterSpacing: "1.76px",
    borderColor: `${colorScheme}`,
    bg: `${colorScheme}`,
    color: "brand.conference2024.nearlyBlack"
  }
})

const outline = defineStyle(({ colorScheme }) => {
  return {
    border: '2px solid',
    borderColor: `${colorScheme}`,
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

const icon = defineStyle(({ colorScheme }) => {
  return {
    border: '2px solid',
    borderColor: `${colorScheme}.500`,
    bg: 'none',
    borderRadius: '5px',
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
    width: 'min(100%, 30rem)',
    minHeight: '60px',
  }),
  short: defineStyle({
    width: 'min(100%, 15rem)',
    minHeight: '60px',
  }),
  icon: defineStyle({
    p: '0.5rem',
  }),
}

export const Button = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    solid,
    outline,
    icon,
    conference2024
  },
  defaultProps: {
    colorScheme: 'brand.warmYellow',
    variant: 'solid',
    size: 'long',
  },
})
  