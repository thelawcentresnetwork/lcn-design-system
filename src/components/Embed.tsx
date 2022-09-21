import React from 'react'
import parse from 'html-react-parser'

import { Box, BoxProps } from '@chakra-ui/react'

interface EmbedProps extends BoxProps {
  /** Embed code (HTML string) */
  code: string
}

function Embed({ code, ...boxProps }: EmbedProps) {
  return <Box {...boxProps}>{parse(code)}</Box>
}

export default Embed
