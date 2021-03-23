import React from 'react';
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from './ChakraAwesome'

function ActionButton(props) {

  return (
    <Button
      {...props}
      as="a"
      role="group"
      size="sm"
      fontSize="xs"
      py="1rem"
      px="4"
      cursor="pointer"
      boxShadow="sm"
      borderColor="gray.200"
      fontWeight="500"
      color="gray.600"
      _hover={{ bg: 'gray.50', boxShadow: 'none' }}
      _active={{ bg: 'gray.50', boxShadow: 'none' }}
      _focus={{ bg: 'gray.50', boxShadow: 'none' }}
      variant="outline">
      {props.children}
    </Button>
  )

}

export default ActionButton
