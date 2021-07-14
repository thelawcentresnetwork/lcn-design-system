import React from 'react'
import { FormLabel } from "@chakra-ui/react"

export default function Label(props) {
  return (
    <FormLabel
      fontFamily="Poppins, Helvetica, sans-serif"
      fontWeight="600"
      fontSize="sm"
      color="gray.700"
      {...props}
    >
      {props.children}
    </FormLabel>
  )
}
