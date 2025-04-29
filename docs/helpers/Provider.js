import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from '../../src/theme'
import { library, fal, far, fas, fad, fab } from '../../src/polyfill'

library.add(fal, fas, far, fad, fab)

export default function Provider({ children }) {
  return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}
