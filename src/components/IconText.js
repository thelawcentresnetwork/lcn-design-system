import React from 'react'
import { ChakraAwesome } from 'law-centres-design-system'
import { Flex, Text } from '@chakra-ui/react'

function IconText(props) {
  return (
    <Flex
      fontFamily="Poppins"
      fontWeight="500"
      fontSize="0.825rem"
      color="gray.500"
      mb="3"
      alignItems="center"
      {...props}
    >
      {props.icon && (
        <Text
          flexShrink={0}
          display="inline-block"
          textAlign="center"
          as="span"
          pt="1"
          width="1.75rem"
          height="1.75rem"
          bg="orange.50"
          borderRadius="lg"
          mr="3"
        >
          <ChakraAwesome
            fontSize="0.7rem"
            icon={props.icon}
            color="brand.Orange"
            fixedWidth
          />
        </Text>
      )}
      <Text lineHeight="1.3" fontSize="0.8rem" as="span">
        {props.children}
      </Text>
    </Flex>
  )
}

function LargeIconText(props) {
  return (
    <Flex
      fontFamily="Poppins"
      fontWeight="500"
      fontSize="0.825rem"
      color="gray.500"
      mb="3"
      alignItems="center"
      direction="column"
      {...props}
    >
      {props.icon && (
        <Text
          flexShrink={0}
          display="inline-block"
          textAlign="center"
          as="span"
          pt="0.325rem"
          width="1.9rem"
          height="1.9rem"
          bg="orange.50"
          mb="0.55rem"
          borderRadius="lg"
        >
          <ChakraAwesome
            fontSize="0.85rem"
            icon={props.icon}
            color="brand.Orange"
            fixedWidth
          />
        </Text>
      )}
      <Text lineHeight="1.3" fontSize="0.8rem" as="span">
        {props.children}
      </Text>
    </Flex>
  )
}

export { IconText, LargeIconText }
