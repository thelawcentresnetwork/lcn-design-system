import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../../src/utilities/Theme";

export default function Provider({ children }) {
  return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}