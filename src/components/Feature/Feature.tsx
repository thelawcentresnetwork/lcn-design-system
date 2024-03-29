import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'

export interface FeatureProps {
  featureItems: {
    fields: {
      description: string
      label: string
    }
  }[]
  textColor?: string
  centred?: boolean
}

const Feature: React.FC<FeatureProps> = ({ featureItems, textColor }) => (
  <Box as="ul">
    {featureItems.map((featureItem) => (
      <Flex
        minHeight="120px"
        borderTop="1px solid"
        gap="1.5rem"
        as="li"
        py="2rem"
        key={featureItems.indexOf(featureItem)}
        justifyContent="space-between"
        alignItems="center"
        color={textColor}
      >
        <Text
          fontFamily="bodyAlternative"
          fontSize="lg"
          lineHeight={1.2}
          width={{ base: '100%', sm: '250px' }}
        >
          {' '}
          {featureItem.fields.label}{' '}
        </Text>
        <Text width={{ base: '100%', sm: '250px' }}>
          {featureItem.fields.description}
        </Text>
      </Flex>
    ))}
  </Box>
)

export default Feature
