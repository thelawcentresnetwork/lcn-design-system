import React from 'react'
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from './ChakraAwesome'

function ChunkyButton(props) {

  return (
    <Button
      as="a"
      cursor="pointer"
      borderRadius="3xl"
      borderWidth="5px"
      borderColor="brand.Green"
      borderTopLeftRadius="0"
      color="brand.Green"
      fontFamily="Poppins"
      _hover={{ bg: "brand.Green", color: '#fff' }}
      _focus={{  bg: "brand.Green", color: '#fff', outline: 0 }}
      _active={{  bg: "brand.Green", color: '#fff', outline: 0 }}
      bg="transparent"
      px="4"
      pt="1.15rem"
      pb="5"
      {...props}>
      { props.icon &&
        <ChakraAwesome color="brand.Green" mr='3' icon={['far', props.icon]} />
      }
      {props.children}
    </Button>
  )

}

export default ChunkyButton
