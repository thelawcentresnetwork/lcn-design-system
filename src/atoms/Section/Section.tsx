import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface SectionProps extends BoxProps {
  backgroundColor?: string
}

export const Section = ({ backgroundColor, ...restProps }: SectionProps) => {
  return (
    <Box
      bg={backgroundColor}
      as="section"
      width="100%"
      minHeight="500px"
      {...restProps}
    ></Box>
  )
}

export const ExtendedSectionLeft = ({
  backgroundColor,
  ...restProps
}: SectionProps) => {
  return (
    <Section
      bg={backgroundColor}
      position="relative"
      {...restProps}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundColor: 'inherit',
        height: '42px',
        width: '40%',
        left: '0px',
        bottom: -6,
      }}
    ></Section>
  )
}

export const ExtendedSectionRight = ({
  backgroundColor,
  ...restProps
}: SectionProps) => {
  return (
    <Section
      bg={backgroundColor}
      {...restProps}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundColor: 'inherit',
        height: '42px',
        width: '40%',
        right: '0px',
        bottom: -6,
      }}
    ></Section>
  )
}

export const SlantedSectionTop = ({
  backgroundColor,
  ...restProps
}: SectionProps) => {
  return (
    <Section
      bg={backgroundColor}
      {...restProps}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundColor: 'inherit',
        height: '50px',

        left: '0px',
        bottom: -2,
        transform: 'skewY(2deg)',
        width: '97.8%',
        ml: '1rem',
        mr: '1rem',

        backfaceVisibility: 'initial',
      }}
    ></Section>
  )
}
