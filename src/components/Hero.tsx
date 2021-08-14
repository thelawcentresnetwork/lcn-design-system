import React from 'react'

import {
    Box,
    BoxProps
} from "@chakra-ui/react"

interface CardProps extends BoxProps {
    /** Link to wrap around entire card */
    link?: string,
    /** URL to source to use as hero image */
    image?: string
}

function Hero({ link, image, children, ...boxProps }: CardProps) {

    return (
        <></>
    )
}

export default Hero


/* import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import richTextOptions from 'utilities/richtext';

import {
    Box,
    Container,
    Image
} from '@chakra-ui/react'

export default function Hero({ image, title, content }) {

    <Box position="relative" overflow="hidden" py="20" >

        {heroImage &&
            <Image
                position="absolute"
                top="0"
                fit="cover"
                width="100%"
                zIndex="10"
                src={heroImage.url}
            />
        }
        {header &&
            <Container maxW="7xl" px="8" zIndex="20" position="relative">
                <Box bg="rgba(255,255,255,0.9)" maxW="lg" p="10" borderRadius="lg" boxShadow="base">
                    {header && documentToReactComponents(header.json, richTextOptions(header.links))}
                </Box>
            </Container>
        }

    </Box>

} */