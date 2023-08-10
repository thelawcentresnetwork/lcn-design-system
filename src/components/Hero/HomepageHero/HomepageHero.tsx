import React from 'react'
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Button,
  BoxProps,
} from '@chakra-ui/react'

import { IconArrowRight } from '../../../atoms/Icons/Icons'

export interface HeroProps extends BoxProps {
  heading: string
  subHeading: string
  introduction: string
  callToAction?: string | undefined
  callToActionLink?: string | undefined
  heroImage: string
  headingBackground: string
  heroImageAltText: string
}

const HomepageHero = ({
  introduction,
  heading,
  subHeading,
  callToAction,
  headingBackground,
  heroImage,
  callToActionLink,
  heroImageAltText,
}: HeroProps) => {
  return (
    <Flex
      direction="column"
      width="100%"
      as="section"
      backgroundColor="brand.brightTeal"
    >
      <Flex
        backgroundColor="brand.legacyTeal"
        flexDirection={{
          base: 'column-reverse',
          sm: 'row',
        }}
      >
        <Flex
          justifyContent={{ base: 'flex-end', sm: 'center' }}
          position="relative"
          width={{
            base: '100%',
            sm: '40%',
          }}
          minHeight="310px"
          pl="clamp(1.00rem, calc(-0.39rem + 6.96vw), 5.00rem)"
        >
          <Img
            marginLeft="auto"
            position="absolute"
            height="125%"
            top="-15%"
            src={heroImage}
            alt={heroImageAltText}
          />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          py={{ base: '20px', xl: '80px' }}
          pr="clamp(1.00rem, calc(-1.26rem + 11.30vw), 7.50rem)"
          pl={{ base: '20px', xl: '0px' }}
          position="relative"
          width={{
            base: '100%',
            sm: '60%',
          }}
        >
          <Heading
            as="h1"
            color="brand.darkBlue"
            variant="h1"
            fontSize={{ base: 'md', xl: '4xl' }}
            backgroundImage={headingBackground}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            pt="clamp(0.75rem, calc(0.58rem + 0.87vw), 1.25rem)"
            pl="20px"
          >
            {heading}
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: '4xs', lg: 'md' }}
            color="brand.darkBlue"
            backgroundColor="brand.brightTeal"
            backgroundRepeat="no-repeat"
            width="fit-content"
            p="5px"
            ml="20px"
          >
            {subHeading}
          </Heading>
          <Text
            color="brand.white.500"
            width={{ base: '100%', md: '60%' }}
            py="clamp(0.75rem, calc(0.58rem + 0.87vw), 15rem)"
          >
            {introduction}
          </Text>
        </Flex>
      </Flex>
      {callToAction && (
        <Button
          marginLeft="auto"
          leftIcon={<IconArrowRight />}
          size={{ base: 'short', sm: 'large' }}
          as="a"
          href={callToActionLink}
        >
          <Box
            fontSize="clamp(0.6rem, calc(0.8rem + 0.37vw), 1.56rem)"
            flexGrow={1}
            whiteSpace="normal"
          >
            {callToAction}
          </Box>
        </Button>
      )}
    </Flex>
  )
}

export default HomepageHero
