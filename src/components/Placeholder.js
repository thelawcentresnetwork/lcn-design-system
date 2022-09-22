import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ChakraAwesome } from 'law-centres-design-system'

export default function Placeholder(props) {
  return (
    <Box
      p="10"
      mt="0"
      borderRadius="md"
      bg="gray.50"
      color="gray.500"
      textAlign="center"
      borderWidth="1px"
      borderColor="gray.100"
      {...props}
    >
      <ChakraAwesome color="gray.200" icon={['fas', 'ellipsis-h']} size="4x" />
      <Text
        mb="5"
        fontSize="sm"
        fontFamily="Poppins, Helvetica"
        fontWeight="500"
      >
        {props.message || 'Nothing here yet.'}{' '}
      </Text>
      {props.children}
    </Box>
  )
}
