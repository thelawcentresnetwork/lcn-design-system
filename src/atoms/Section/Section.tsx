import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export interface SectionProps extends BoxProps {
  backgroundColor?: string
}

export interface HeroSectionProps extends SectionProps {
  showCardDecoration?: string
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
export const HeroSection = ({
  backgroundColor,
  showCardDecoration,
  ...restProps
}: HeroSectionProps) => {
  return (
    <>
    <Section
      bg={backgroundColor}
      position="relative"
      {...restProps}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundColor: 'inherit',
        height: '50px',
        width: '40%',
        left: '0px',
        bottom: '-50px',
      }}
    />
    {showCardDecoration && <Box
        display={{sm: "none", md: "block", lg: "block", xl: "block"}}
        position="relative"
       _before={{
        content: '""',
        display: "block",
        position: 'absolute',
        height: '220px',
        width: '180px',
        transformOrigin: 'center',
        top: '0px',
        left: '-85px',
        backgroundColor: '#E45E37',
        transform: 'rotate(38.25deg)',
        zIndex: '2'
      }}
      _after={{
        content: '""',
        display: "block",
        position: 'absolute',
        height: '220px',
        width: '180px',
        transformOrigin: 'center',
        top: '83px',
        left: '-85px',
        backgroundColor: '#FCC24B',
        transform: 'rotate(-21.9deg)',
        zIndex: '1'
      }}
    />}
</>
  )
}

export const ExtendedSectionLeft = ({
  backgroundColor,
  ...restProps
}: SectionProps) => {
  return (
    <Section
      bg={backgroundColor}
      mt="5rem"
      position="relative"
      {...restProps}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundColor: 'inherit',
        height: '50px',
        width: '40%',
        left: '0px',
        top: '-45px',
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
      position="relative"
      bg={backgroundColor}
      {...restProps}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundColor: 'inherit',
        height: '50px',
        width: '35%',
        left: '65%',
        bottom: '-36px',
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
      mt="5rem"
      minHeight="550px"
      {...restProps}
      _before={{
        content: '""',
        position: 'relative',
        display: 'flex',
        backgroundColor: 'inherit',
        height: '80px',
        top: '-43',
        transform: 'skewY(1.5deg)',
        width: '100%',

        backfaceVisibility: 'initial',
      }}
    ></Section>
  )
}
