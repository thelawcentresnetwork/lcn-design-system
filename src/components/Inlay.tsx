import React from 'react'

import {
    Box,
    Flex,
    BoxProps,
    Img
} from "@chakra-ui/react"

interface InlayProps extends BoxProps {
    /** URL to source to use as hero image */
    image?: string
    context?: string
}

function Inlay({ image, children, context = 'light', ...boxProps }: InlayProps) {
    return (
        <Flex
            justifyContent="flex-end"
            py="5%"
            position="relative">
            {image &&
                <Img
                    borderRadius="lg"
                    left="0"
                    position="absolute"
                    top="0"
                    fit="cover"
                    boxShadow="base"
                    height="100%"
                    width="70%"
                    src={image}
                />
            }
            <Box
                borderRadius="lg"
                zIndex="10"
                w="55%"
                bg={context === 'dark' ? 'white' : "brand.Blue"}
                boxShadow="xl"
                color={context === 'dark' ? 'gray.800' : "white"}
                p="10"
                {...boxProps}>
                {children}
            </Box>
        </Flex>
    )

}

export default Inlay
