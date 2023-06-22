import React from 'react'

import { Box, Flex, BoxProps, Image } from '@chakra-ui/react'

interface InlayProps extends BoxProps {
  /** URL to source to use as hero image */
  image?: string
  context?: string
}

function Inlay({
  image,
  children,
  context = 'light',
  ...boxProps
}: InlayProps) {
  return (
    <Flex justifyContent="flex-end" py="5%" position="relative">
      {image && (
        <Box
          left="0"
          position="absolute"
          top="0"
          boxShadow="base"
          borderRadius="lg"
          height="100%"
          overflow="hidden"
          width="70%"
        >
          <Image fit="cover" width="100%" height="100%" src={image} />
        </Box>
      )}
      <Box
        borderRadius="lg"
        zIndex="10"
        w="55%"
        bg={context === 'dark' ? 'white' : 'brand.Blue'}
        boxShadow="xl"
        color={context === 'dark' ? 'gray.800' : 'white'}
        p="10"
        {...boxProps}
      >
        {children}
      </Box>
    </Flex>
  )
}

export default Inlay
