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

function Feature({ link, image, children, ...boxProps }: CardProps) {

    return (
        <></>
    )
}

export default Feature
