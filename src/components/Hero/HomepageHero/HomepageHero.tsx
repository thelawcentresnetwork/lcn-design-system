import React from 'react'
import type { Entry } from 'contentful'
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  BoxProps,
} from '@chakra-ui/react'

import withContentfulLivePreview from '../../withContentfulLivePreview'
import { Inspectable } from '../../../atoms/Inspectable'

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
  entry?: Entry<Record<string, unknown>>
  inspectorProps?: (options: { fieldId: string }) => object
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
  entry,
  inspectorProps
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
          <Inspectable.Image
            entry={entry}
            field="heroImage"
            inspectorProps={inspectorProps}
            marginLeft="auto"
            paddingRight="1rem"
            position="absolute"
            objectFit="cover"
            height="125%"
            top="-15%"
            src={entry?.fields?.heroImage?.fields?.file?.url || heroImage}
            alt={entry?.fields?.heroImage?.fields?.description || heroImageAltText}
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
          <Inspectable.Heading
            entry={entry}
            field="heading"
            inspectorProps={inspectorProps}
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
          </Inspectable.Heading>
          <Inspectable.Heading
            entry={entry}
            field="subHeading"
            inspectorProps={inspectorProps}
            as="h2"
            fontSize="30px"
            fontWeight="500"
            lineHeight="36px"
            letterSpacing="0.9px"
            color="brand.darkBlue"
            backgroundColor="brand.brightTeal"
            backgroundRepeat="no-repeat"
            width="fit-content"
            px="43px"
            py="13px"
            ml="20px"
          >
            {subHeading}
          </Inspectable.Heading>
          <Inspectable.Text
            entry={entry}
            field="introduction"
            inspectorProps={inspectorProps}
            color="brand.white.500"
            width={{ base: '100%', md: '60%' }}
            py="clamp(0.75rem, calc(0.58rem + 0.87vw), 15rem)"
            fontFamily="Roboto Slab"
            fontSize="22px"
            fontWeight="400"
            lineHeight="30px"
            letterSpacing="0.22px"
          >
            {introduction}
          </Inspectable.Text>
        </Flex>
      </Flex>
      {callToAction && (
        <Flex>
          <Button
            marginLeft="auto"
            colorScheme="brand.white"
            leftIcon={<IconArrowRight />}
            size={{ base: 'large', sm: 'large' }}
            as="a"
            href={callToActionLink}
          >
            <Box
              fontSize={{ base: "18px", lg: "26px" }}
              lineHeight={{ base: "18px", lg: "32px" }}
              letterSpacing={{ base: "0.39px", lg: "1.04px" }}
              fontWeight="700"
              paddingRight={{ base: "25px", lg: "100px" }}
              paddingLeft="13px"
              py={{ base: "0px", lg: "15px" }}
              flexGrow={1}
              whiteSpace="normal"
            >
              {callToAction}
            </Box>
          </Button>
          <Box width="68px" backgroundColor="brand.legacyTeal" />
        </Flex>
      )}
    </Flex>
  )
}

export default withContentfulLivePreview(HomepageHero)