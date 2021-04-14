import React from 'react'
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from './ChakraAwesome'

function ChunkyButton(props) {

  return (
    <Button
      as="a"
      cursor="pointer"
      borderRadius="3xl"
      borderWidth="4px"
      borderColor="brand.Green"
      borderTopLeftRadius="0"
      color="white"
      bg="brand.Green"
      fontFamily="Poppins, Helvetica"
      _hover={{  }}
      px="10"
      pt="1.25rem"
      pb="1.325rem"
      role="group"
      position="relative"
      overflow="hidden"
      {...props}>
      { props.icon &&
        <ChakraAwesome
          position="absolute"
          top="5em"
          left="1.75em"
          transition="top 0.3s"
          _groupHover={{ top: '1em' }}
          color="white"
          mr='3'
          icon={['far', props.icon]} />
      }
      <Text
        left="0em"
        transition="left 0.3s"
        _groupHover={{ left: '1em' }}
        position="relative"
        as="span">
        {props.children}
      </Text>
    </Button>
  )

}

export default ChunkyButton
