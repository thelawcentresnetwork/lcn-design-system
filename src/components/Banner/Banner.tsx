import React from 'react'

import {
  Stack,
  StackProps,
  BoxProps,
  HStack,
  Button,
  Text,
} from '@chakra-ui/react'
import { Inspectable } from '../../atoms/Inspectable'
import type { Entry } from 'contentful'

export interface BannerProps extends StackProps {
  text: string
  type?: string
  link?: string
  linkText?: string
  icon?: BoxProps
  entry?: Entry<any>
  inspectorProps?: any
}

export default function Banner({
  text,
  type,
  link,
  linkText,
  icon,
  entry,
  inspectorProps,
  ...stackProps
}: BannerProps) {
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
      color="brand.white.500"
      bg={type == 'alert' ? 'brand.legacyPink' : 'brand.darkBlue'}
      {...stackProps}
    >
      <HStack spacing="3" mr="2">
        <>{icon}</>
        <Inspectable.Text
          entry={entry}
          field="text"
          inspectorProps={inspectorProps}
          fontWeight="medium"
          marginEnd="2"
        >
          {text}
        </Inspectable.Text>
      </HStack>
      {linkText && (
        <Inspectable.Button
          entry={entry}
          field="linkText"
          inspectorProps={inspectorProps}
          as="a"
          href={link}
          variant="outline"
          size="short"
          colorScheme="brand.white.500"
        >
          {linkText}
        </Inspectable.Button>
      )}
    </Stack>
  )
}
