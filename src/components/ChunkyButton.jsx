import React from 'react'
import { Text, Button } from "@chakra-ui/react"
import ChakraAwesome from '../utilities/ChakraAwesome'

function ChunkyButton(props) {

  return (
    <Button
      as="a"
      cursor="pointer"
      borderRadius="3xl"
      borderWidth="4px"
      borderColor="white"
      borderTopRightRadius="0"
      color="white"
      bg="transparent"
      fontFamily="Poppins, Helvetica"
      _hover={{  }}
      px="10"
      pt="1.25rem"
      pb="1.325rem"
      role="group"
      fontWeight="600"
      boxShadow="base"
      position="relative"
      overflow="hidden"
      color="white"
      {...props}>
      { props.icon &&
        <ChakraAwesome
          _groupHover={{
            animation: 'shake 0.82s cubic-bezier(.1,.37,.19,.37) both',
            transform: 'translate3d(0, 0, 0)'
          }}
          color="white"
          mr='4'
          icon={props.icon} />
      }
      <Text
        position="relative"
        as="span">
        {props.children}
      </Text>
    </Button>
  )

}

export default ChunkyButton
