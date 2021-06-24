import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "./Theme";

function ThemeProvider(props) {

  return (
    <ChakraProvider theme={Theme}>
      {props.children}
    </ChakraProvider>
  )

}

export default ThemeProvider
