import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'
import { Inspectable } from '../../atoms/Inspectable'

export interface FeatureProps {
  featureItems: {
    fields: {
      description: string
      label: string
    }
    sys?: {
      id: string
    }
  }[]
  textColor?: string
  centred?: boolean
  conference2024?: boolean
  entry?: any
  inspectorProps?: any
  inspectorMap?: Map<string, any>
}

const Feature: React.FC<FeatureProps> = ({
  featureItems,
  textColor,
  conference2024,
  entry,
  inspectorProps,
  inspectorMap,
}) => (
  <Inspectable.Box entry={entry} inspectorProps={inspectorProps} as="ul">
    {featureItems.map((featureItem) => {
      const featureItemInspectorProps =
        inspectorMap?.get(featureItem.sys?.id) || null

      return (
        <Inspectable.Box
          key={featureItems.indexOf(featureItem)}
          entry={featureItem}
          inspectorProps={featureItemInspectorProps}
        >
          <Flex
            minHeight="120px"
            borderTop="1px solid"
            gap="1.5rem"
            py="2rem"
            justifyContent="space-between"
            alignItems="center"
            color={textColor}
            as="li"
          >
            <Inspectable.Text
              entry={featureItem}
              field="label"
              inspectorProps={featureItemInspectorProps}
              fontFamily={
                conference2024 ? 'headingConference2024' : 'bodyAlternative'
              }
              fontSize={conference2024 ? 'h3Conference2024' : 'lg'}
              lineHeight={1.2}
              width={{ base: '100%', sm: '250px' }}
            >
              {featureItem.fields.label}
            </Inspectable.Text>
            <Inspectable.Text
              entry={featureItem}
              field="description"
              inspectorProps={featureItemInspectorProps}
              width={{ base: '100%', sm: '250px' }}
              {...(conference2024 && {
                fontFamily: 'Archivo',
                fontSize: '18px',
                lineHeight: '26.784px',
              })}
            >
              {featureItem.fields.description}
            </Inspectable.Text>
          </Flex>
        </Inspectable.Box>
      )
    })}
  </Inspectable.Box>
)

export default Feature
