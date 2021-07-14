import React from 'react'
import { Text, Box, Flex, Heading } from "@chakra-ui/react"

function ColorDescription(props) {

  return (
    <Box>
      <Flex>
        <Box borderRadius="md" boxShadow="inner" width="50px" height="50px" bg={props.color}></Box>
        <Box pl="5">
          <Heading as="h4" size="xs" pt="1" mb="1">{props.name}</Heading>
          <Text color="gray.600" fontSize="xs">{props.color}</Text>
        </Box>
      </Flex>
    </Box>
  )

}

export default ColorDescription
