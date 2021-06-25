import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../utilities/Theme";

function Themed(props) {

  return (
    <ChakraProvider theme={Theme}>
      {props.children}
    </ChakraProvider>
  )

}

export default Themed
