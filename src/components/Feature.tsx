import * as React from 'react'
import { Box, Stack, Text, BoxProps } from '@chakra-ui/react'
import ChakraAwesome from '../utilities/ChakraAwesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

interface FeatureProps extends BoxProps {
  /** Title of card, must be included for link overlays to work */
  title: string
  /** Short description */
  description: string
  /** FontAwesome icon name */
  icon: IconName
}

export default function Feature({
  title,
  description,
  icon,
  ...rest
}: FeatureProps) {
  return (
    <Box {...rest}>
      <Box fontSize="2.5rem">
        <ChakraAwesome icon={['fas', icon]} />
      </Box>
      <Stack mt="3">
        <Text as="h3" fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text pr="6" lineHeight="tall">
          {description}
        </Text>
      </Stack>
    </Box>
  )
}
