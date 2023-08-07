import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export interface ImageProps extends BoxProps {
  src: string
  alt?: string
}

const Image: React.FC<ImageProps> = ({ src, alt, ...args }) => (
  <Box {...args}>
    <img src={src} alt={alt} />
  </Box>
)

export default Image
