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
  conference2024?: boolean
}

const Feature: React.FC<FeatureProps> = ({ featureItems, textColor, conference2024 }) => (
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
          fontFamily={conference2024 ? "headingConference2024" : "bodyAlternative"}
          fontSize={conference2024 ? "h3Conference2024" : "lg"}
          lineHeight={1.2}
          width={{ base: '100%', sm: '250px' }}
        >
          {' '}
          {featureItem.fields.label}{' '}
        </Text>
        <Text width={{ base: '100%', sm: '250px' }} {...(conference2024 && {fontFamily: "Archivo", fontSize: "18px", lineHeight: "26.784px"})}>
          {featureItem.fields.description}
        </Text>
      </Flex>
    ))}
  </Box>
)

export default Feature
