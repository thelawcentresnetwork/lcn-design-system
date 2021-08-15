import React from 'react'

import {
  Stack,
  StackProps,
  BoxProps,
  HStack,
  Button,
  Text
} from '@chakra-ui/react'

interface BannerProps extends StackProps {
  text: string,
  type?: string
  link?: string,
  linkText?: string,
  icon: BoxProps
}

export default function Banner({ text, type, link, linkText, icon, ...stackProps }: BannerProps) {

  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
      color="white"
      bg={type == "alert" ? "red.500" : "blue.500"}
      {...stackProps}
    >
      <HStack spacing="3" mr="2">
        {icon}
        <Text fontWeight="medium" marginEnd="2">
          {text}
        </Text>
      </HStack>
      <Button
        size='sm'
        as="a"
        href={link}
        variant="outline"
        colorScheme="white">
        {linkText}
      </Button>
    </Stack>
  )

}
