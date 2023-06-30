import React from 'react'
import { ExtendedSectionLeft } from '../../atoms/Section/Section'
import { Box, BoxProps, Heading, Text, Flex } from '@chakra-ui/react'

export interface HeroProps extends BoxProps {
  /** Main text heading for the hero */

  heading: string
  pageTitle?: string
  backgroundColour?: string
  textColour?: string
}

export const Hero = ({
  pageTitle,
  backgroundColour,
  textColour,
  heading,
  children,
}: HeroProps) => {
  return (
    <ExtendedSectionLeft
      bg={backgroundColour}
      display="flex"
      justifyContent="space-evenly"
    >
      <Flex my="10rem" mx="5rem" width="100%" justifyContent="space-evenly">
        <Flex justifyContent="flex-start">
          <Box mb="1rem">
            <Text
              color={textColour}
              fontFamily="bodyAlternative"
              textTransform="uppercase"
              fontSize="4xs"
              pb="1rem"
            >
              {pageTitle}
            </Text>
            <Heading
              fontSize="4xl"
              as="h1"
              variant="h1"
              maxWidth="15ch"
              color={textColour}
            >
              {heading}
            </Heading>
            <Flex
              mb="0.5rem"
              position="relative"
              bottom="10px"
              left="-50px"
              justifyContent="flex-end"
              flexDirection="column"
            >
              <Box
                alignSelf="flex-start"
                bg="brand.warmYellow.500"
                width="19px"
                height="37px"
              ></Box>
              <Box
                position="relative"
                bg="brand.warmYellow.500"
                height="19px"
                width="52px"
                overflow="visible"
              ></Box>
            </Flex>
          </Box>
        </Flex>
        <Text
          fontSize="sm"
          color={textColour}
          fontFamily="bodyAlternative"
          maxWidth="23ch"
          pt="2rem"
        >
          {children}
        </Text>
      </Flex>
    </ExtendedSectionLeft>
  )
}
