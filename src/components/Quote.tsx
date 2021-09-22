import React from 'react'

import {
    Box,
    BoxProps,
    Center,
    chakra,
    Flex,
    HStack,
    Img,
    Text
} from "@chakra-ui/react"

interface QuoteProps extends BoxProps {
    /** The actual quote */
    quote?: string,
    /** Name of person cited */
    citation?: string,
    /** Other information about citataion; role, organisation etc. */
    citationTitle?: string,
    /** URL to source to use as avatar image */
    image?: string,
    /** icon to use to highlight this quote */
    icon?: BoxProps,
    context?: string
}

function Quote({ quote, icon, citation, citationTitle, image, children, context, ...boxProps }: QuoteProps) {

    return (
        <Flex direction="column" {...boxProps}>
            <Box
                flex="1"
                rounded="lg"
                bg='white'
                shadow="base"
                px="12"
                pt="10"
                pb="10"
                pos="relative"
                mb="5"
            >
                {icon}
                <Text mt="2" fontSize="lg" fontWeight="600">
                    {quote}
                </Text>
            </Box>
            <HStack spacing="4">
                <Center
                    rounded="full"
                    w="4rem"
                    h="4rem"
                    p="1"
                    border="3px solid"
                    borderColor={context == 'dark' ? 'white' : "brand.Green"}>
                    <Img w="100%" h="100%" rounded="full" objectFit="cover" src={image} />
                </Center>
                <Box color={context == 'dark' ? 'white' : "gray.800"}>
                    <Text fontWeight="bold">{citation}</Text>
                    <Text fontSize="sm">{citationTitle}</Text>
                </Box>
            </HStack>
        </Flex>
    )
}

export default Quote
