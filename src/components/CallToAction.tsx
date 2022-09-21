import * as React from 'react'

import { Box, BoxProps, Button, Text, Heading } from '@chakra-ui/react'

interface CallToActionProps extends BoxProps {
  /** Heading for callto action */
  heading: string
  /** Short description */
  description?: string
  /** Text for the call to action link */
  buttonText?: string
  /** Main call to action link */
  link?: string
}

const CallToAction = ({
  heading,
  description,
  buttonText,
  link,
  ...rest
}: CallToActionProps) => {
  return (
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading
          as="h2"
          size="2xl"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          {heading}
        </Heading>
        <Text mt="4" fontSize="lg">
          {description}
        </Text>
        <Button
          mt="8"
          as="a"
          href={link}
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}

export default CallToAction
