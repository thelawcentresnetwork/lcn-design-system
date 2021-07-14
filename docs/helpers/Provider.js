import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../../src/theme";

import { library } from '@fortawesome/fontawesome-svg-core'

import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
  fal,
  fas,
  far,
  fab
)

export default function Provider({ children }) {
  return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}