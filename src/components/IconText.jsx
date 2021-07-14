import React from 'react'
import ChakraAwesome from '../utilities/ChakraAwesome'
import { Flex, Text, Box } from "@chakra-ui/react"

function IconText(props) {
  const { color = 'brand.Orange', bg = "orange.50", icon, children, ...rest } = props
  return (
    <Flex
      fontFamily="Poppins"
      fontWeight="400"
      fontSize="0.825rem"
      color="gray.500"
      mb="3"
      alignItems="center"
      {...rest}
    >
      {props.icon &&
        <Text
          flexShrink={0}
          display="inline-block"
          textAlign="center"
          as='span'
          pt="0.4rem"
          width="2rem"
          height="2rem"
          bg={`${bg}`}
          borderRadius="lg"
          mr='4'>
          <ChakraAwesome fontSize="0.7rem" icon={icon} color={`${color}`} fixedWidth />
        </Text>
      }
      <Text lineHeight="1.4" fontSize="0.8rem" as='span'>{children}</Text>
    </Flex>
  )
}

function LargeIconText(props) {
  return (
    <Box
      display={{ base: 'flex', md: 'block' }}
      fontFamily="Poppins"
      fontWeight="400"
      fontSize="0.825rem"
      color="gray.500"
      textAlign="center"
      pb={{ base: '3', md: '0' }}
      alignItems="center"
      direction="column"
      {...props}
    >
      {props.icon &&
        <Text
          flexShrink={0}
          display={{ base: 'inline-block', md: 'inline-block' }}
          textAlign="center"
          as='span'
          pt="0.75rem"
          width="2.5rem"
          height="2.5rem"
          bg="orange.50"
          mb={{ base: '0', md: '0.75rem' }}
          mr={{ base: '3', md: '0' }}
          borderRadius="lg">
          <ChakraAwesome
            fontSize="0.85rem"
            icon={props.icon} color="brand.Orange"
            fixedWidth />
        </Text>
      }
      <Text lineHeight="1.3" display="block" textAlign="center" fontSize="0.8rem" as='span'>{props.children}</Text>
    </Box>
  )
}

export {
  IconText,
  LargeIconText
}
