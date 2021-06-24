import React from 'react';
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from '../utilities/ChakraAwesome'

function PrimaryButton(props) {

  return (
    <Button
      as="a"
      borderRadius="lg"
      color="white"
      bg="green.700"
      cursor="pointer"
      borderLeftWidth="1px"
      borderRightWidth="3px"
      borderBottomWidth="3px"
      borderColor="brand.Green"
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
