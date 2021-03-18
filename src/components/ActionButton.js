import React from 'react';
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from './ChakraAwesome'

function ActionButton(props) {

  return (
    <Button
      {...props}
      as="a"
      borderRadius="lg"
      fontSize="0.85rem"
      color="white"
      bg="green.700"
      borderLeftWidth="1px"
      borderRightWidth="3px"
      borderBottomWidth="3px"
      borderColor="green.800"
      _hover={{ bg: "green.800" }}
      _focus={{ outline: 0 }}
      _active={{ outline: 0 }}
      px="5"
      pt="5"
      pb="1.2rem">
      { props.icon &&
        <ChakraAwesome color="white" mr='4' icon={['fas', props.icon]} />
      }
      {props.children}
    </Button>
  )

}

export default ActionButton
