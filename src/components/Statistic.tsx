import * as React from 'react'

import {
    Box,
    Stack,
    StackProps,
    useColorModeValue
} from '@chakra-ui/react'

interface StatProps extends StackProps {
    /** Label for this statisitic */
    title?: string,
    /** Statistic value string */
    value?: string,
}

const Statistic = ({ title, value, ...rest }: StatProps) => {
    return (
        <Stack direction="column-reverse" maxW="12rem" mx="auto" as="dl" textAlign="center" {...rest}>
            <Box
                as="dt"
                color={useColorModeValue('gray.600', 'whiteAlpha.700')} fontWeight="medium">
                {title}
            </Box>
            <Box
                as="dd"
                fontSize="4xl"
                fontWeight="extrabold"
                color={useColorModeValue('green.500', 'green.300')}
            >
                {value}
            </Box>
        </Stack>
    )
}

export default Statistic