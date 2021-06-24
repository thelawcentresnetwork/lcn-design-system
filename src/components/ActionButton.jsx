import React from 'react';
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from '../utilities/ChakraAwesome'

function ActionButton(props) {

  return (
    <Button
      as="a"
      role="group"
      size="sm"
      fontFamily="Poppins, Helvetica"
      fontSize="0.8rem"
      py="1.25rem"
      px="4"
      cursor="pointer"
      boxShadow="sm"
      borderColor="gray.200"
      fontWeight="400"
      color="gray.600"
      _hover={{ bg: 'gray.50', boxShadow: 'none' }}
      _active={{ bg: 'gray.50', boxShadow: 'none' }}
      _focus={{ bg: 'gray.50', boxShadow: 'none' }}
      variant="outline"
      {...props}>
      {props.children}
    </Button>
  )

}

export default ActionButton
