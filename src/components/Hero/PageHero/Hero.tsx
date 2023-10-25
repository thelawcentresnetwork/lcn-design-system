import React from 'react'
import { HeroSection } from '../../../atoms/Section/Section'
import { Box, BoxProps, Heading, Text, Flex } from '@chakra-ui/react'
export interface HeroProps extends BoxProps {
  heading: string
  pageTitle?: string
  backgroundColour?: string
  textColour?: string
  subHeading?: string
  image?: string
  imageAlt?: string
  showCardDecoration?: boolean
}

const Hero = ({
  pageTitle,
  backgroundColour,
  textColour,
  heading,
  subHeading,
  image,
  imageAlt,
  showCardDecoration,
}: HeroProps) => {
  return (
    <HeroSection
      bg={backgroundColour}
      display="flex"
      justifyContent="space-evenly"
      showCardDecoration={showCardDecoration}
    >
      <Flex
        mt="10rem"
        mb="2rem"
        mx="5rem"
        width="100%"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
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
              fontSize={{base: "2xl", sm: "3xl", lg: "4xl"}}
              as="h1"
              variant="h1"
              maxWidth="15ch"
              color={textColour}
            >
              {heading}
            </Heading>
            {image && (
              <Text
                fontSize="30px"
                lineHeight="36px"
                letterSpacing="0.9px"
                fontWeight="600"
                color={textColour}
                fontFamily="bodyAlternative"
                maxWidth="30ch"
                pt="2rem"
              >
                {subHeading}
              </Text>
            )}

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

        {image && (
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            maxWidth="500px"
          >
            <img src={image} alt={imageAlt} height="auto" width="100%" />
          </Box>
        )}

        {!image && (
          <Text
            fontSize="30px"
            lineHeight="36px"
            letterSpacing="0.9px"
            fontWeight="600"
            color={textColour}
            fontFamily="bodyAlternative"
            maxWidth="23ch"
            pt="2rem"
          >
            {subHeading}
          </Text>
        )}
      </Flex>
    </HeroSection>
  )
}

export default Hero
