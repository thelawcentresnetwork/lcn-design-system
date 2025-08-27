import * as React from 'react'

import {
  Box,
  BoxProps,
  Button,
  Text,
  Heading,
  Container,
} from '@chakra-ui/react'
import { Inspectable } from '../../atoms/Inspectable'
import type { Entry } from 'contentful'

export interface CallToActionProps extends BoxProps {
  /** Heading for call to action */
  heading: string
  /** Short description */
  description: string
  /** Text for the call to action link */
  buttonText: string
  /** Main call to action link */
  link: string
  entry?: Entry<any>
  inspectorProps?: any
}

const CallToAction = ({
  heading,
  description,
  buttonText,
  link,
  entry,
  inspectorProps,
  ...rest
}: CallToActionProps) => {
  return (
    <Box as="section" textAlign="center" {...rest}>
      <Inspectable.Heading
        entry={entry}
        field="heading"
        inspectorProps={inspectorProps}
        as="h2"
        fontSize="xl"
        fontWeight="extrabold"
      >
        {heading}
      </Inspectable.Heading>
      <Inspectable.Text
        entry={entry}
        field="description"
        inspectorProps={inspectorProps}
        mt="25px"
        fontSize="sm"
      >
        {description}
      </Inspectable.Text>
      <Inspectable.Button
        entry={entry}
        field="buttonText"
        inspectorProps={inspectorProps}
        mt="25px"
        as="a"
        href={link}
      >
        {buttonText}
      </Inspectable.Button>
    </Box>
  )
}

export default CallToAction
