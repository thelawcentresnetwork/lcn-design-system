import React from 'react'

import { Image, Box, BoxProps, Heading, Container } from '@chakra-ui/react'

interface HeroProps extends BoxProps {
  /** Main text heading for the hero */
  heading?: string
  /** URL to source to use as hero image */
  image?: string
}

function Hero({ heading, image, children, ...boxProps }: HeroProps) {
  return (
    <Box position="relative" overflow="hidden" py="20" {...boxProps}>
      {image && (
        <Image
          position="absolute"
          top="0"
          fit="cover"
          width="100%"
          zIndex="10"
          src={image}
        />
      )}
      <Container maxW="7xl" px="8" zIndex="20" position="relative">
        <Box
          bg="rgba(255,255,255,0.9)"
          maxW={{ sm: 'full', md: '30%', lg: '40%' }}
          p="10"
          borderRadius="lg"
          boxShadow="base"
        >
          {heading && (
            <Heading mb="3" as="h1">
              {heading}
            </Heading>
          )}
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
