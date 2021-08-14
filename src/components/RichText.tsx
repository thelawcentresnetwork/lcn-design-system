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

function RichText({ link, image, children, ...boxProps }: CardProps) {

    return (
        <></>
    )
}

export default RichText


/* import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import richTextOptions from 'utilities/richtext';

import {
    Box,
} from '@chakra-ui/react'

export default function RichText({ content }) {
    return (
        <Box>
            {content && documentToReactComponents(content.json, richTextOptions(content.links))}
        </Box>
    )
} */