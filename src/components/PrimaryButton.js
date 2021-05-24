import React from 'react';
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from './ChakraAwesome'

function PrimaryButton(props) {

  return (
    <Button
      as="a"
      borderRadius="lg"
      fontSize="0.85rem"
      color="white"
      bg="green.700"
      cursor="pointer"
      _hover={{ bg: "brand.Green" }}
      _focus={{ outline: 0 }}
      _active={{ outline: 0 }}
      px="5"
      pt="5"
      pb="1.2rem"
      {...props}>
      { props.icon &&
        <ChakraAwesome color="white" mr='4' icon={['fas', props.icon]} />
      }
      {props.children}
    </Button>
  )

}

export default PrimaryButton
