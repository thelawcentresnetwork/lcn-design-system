import React from 'react'
import { Flex, BoxProps } from '@chakra-ui/react'

export interface ImageProps extends BoxProps {
  src: string
  alt?: string
}

const Image: React.FC<ImageProps> = ({ src, alt, ...args }) => (
  <Flex {...args} flexDirection="column">
    <img src={src} alt={alt} />
  </Flex>
)

export default Image
