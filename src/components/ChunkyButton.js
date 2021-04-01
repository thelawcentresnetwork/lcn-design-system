import React from 'react'
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from './ChakraAwesome'

function ChunkyButton(props) {

  return (
    <Button
      as="a"
      cursor="pointer"
      borderRadius="3xl"
      borderTopLeftRadius="0"
      color="white"
      bg="brand.Green"
      fontFamily="Poppins, Helvetica"
      _hover={{  }}
      px="10"
      pt="1.325rem"
      pb="6"
      role="group"
      position="relative"
      overflow="hidden"
      {...props}>
      { props.icon &&
        <ChakraAwesome
          position="absolute"
          top="5em"
          left="1.75em"
          transition="top 0.5s"
          _groupHover={{ top: '1em' }}
          color="white"
          mr='3'
          icon={['fas', props.icon]} />
      }
      <Text
        left="0em"
        transition="left 0.5s"
        _groupHover={{ left: '1.1em' }}
        position="relative"
        as="span">
        {props.children}
      </Text>
    </Button>
  )

}

export default ChunkyButton
