import * as React from 'react'

import {
    Box,
    Stack,
    Text,
    BoxProps
} from '@chakra-ui/react'

//@ts-ignore
import ChakraAwesome from '../utilities/ChakraAwesome';

interface FeatureProps extends BoxProps {
    /** Title of card, must be included for link overlays to work */
    title: string,
    /** Short description */
    description: string,
    /** FontAwesome icon name */
    icon?: string,
}

export default function Feature({ title, description, icon, ...rest }: FeatureProps) {

    return (
        <Box {...rest}>
            <Box fontSize="2.5rem">
                <ChakraAwesome icon={['fad', icon]} />
            </Box>
            <Stack mt="3">
                <Text as="h3" fontSize="lg" fontWeight="bold">
                    {title}
                </Text>
                <Text pr="6" lineHeight="tall">
                    {description}
                </Text>
            </Stack>
        </Box>
    )
}