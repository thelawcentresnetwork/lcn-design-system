import React from 'react'
import { HeroSection } from '../../../atoms/Section/Section'
import { Box, BoxProps, Heading, Text, Flex } from '@chakra-ui/react'
import { Inspectable } from '../../../atoms/Inspectable'
import type { Entry } from 'contentful'
export interface HeroProps extends BoxProps {
  heading: string
  pageTitle?: string
  backgroundColour?: string
  textColour?: string
  subHeading?: string
  image?: string
  imageAlt?: string
  showCardDecoration?: boolean
  entry?: Entry<any>
  inspectorProps?: any
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
  entry,
  inspectorProps,
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
            <Inspectable.Text
              entry={entry}
              field="pageTitle"
              inspectorProps={inspectorProps}
              color={textColour}
              fontFamily="bodyAlternative"
              textTransform="uppercase"
              fontSize="4xs"
              pb="1rem"
            >
              {pageTitle}
            </Inspectable.Text>
            <Inspectable.Heading
              entry={entry}
              field="heading"
              inspectorProps={inspectorProps}
              fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
              as="h1"
              variant="h1"
              maxWidth="15ch"
              color={textColour}
            >
              {heading}
            </Inspectable.Heading>
            {image && (
              <Inspectable.Text
                entry={entry}
                field="subHeading"
                inspectorProps={inspectorProps}
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
              </Inspectable.Text>
            )}

            <Flex
              mb="0.5rem"
              position="relative"
              bottom="10px"
              left="-50px"
              justifyContent="flex-end"
              flexDirection="column"
              visibility={{ base: 'hidden', sm: 'visible' }}
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
            <Inspectable.Image
              entry={entry}
              field="heroImage"
              inspectorProps={inspectorProps}
              src={image}
              alt={imageAlt}
              height="auto"
              width="100%"
            />
          </Box>
        )}

        {!image && (
          <Inspectable.Text
            entry={entry}
            field="subHeading"
            inspectorProps={inspectorProps}
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
          </Inspectable.Text>
        )}
      </Flex>
    </HeroSection>
  )
}

export default Hero
