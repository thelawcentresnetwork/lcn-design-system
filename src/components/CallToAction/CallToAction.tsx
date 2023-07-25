import * as React from 'react'

import {
  Box,
  BoxProps,
  Button,
  Text,
  Heading,
  Container,
} from '@chakra-ui/react'

export interface CallToActionProps extends BoxProps {
  /** Heading for call to action */
  heading: string
  /** Short description */
  description: string
  /** Text for the call to action link */
  buttonText: string
  /** Main call to action link */
  link: string
}

const CallToAction = ({
  heading,
  description,
  buttonText,
  link,
  ...rest
}: CallToActionProps) => {
  return (
    <Box as="section" textAlign="center" {...rest}>
      <Heading as="h2" fontSize="xl" fontWeight="extrabold">
        {heading}
      </Heading>
      <Text mt="25px" fontSize="sm">
        {description}
      </Text>
      <Button mt="25px" as="a" href={link}>
        {buttonText}
      </Button>
    </Box>
  )
}

export default CallToAction
