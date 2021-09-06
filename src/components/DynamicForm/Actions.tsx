import React from 'react'
import { useFormContext } from "react-hook-form";
//@ts-ignore
import ChakraAwesome from '../../utilities/ChakraAwesome';

import {
    Button,
    StackProps,
    HStack
} from '@chakra-ui/react'

interface DActionsProps extends StackProps {
    labels?: {
        submit: string,
        cancel: string
    }
    onCancel: () => {}
}

export default function DActions({
    labels,
    onCancel,
    ...boxProps
}: DActionsProps) {

    return (

        <HStack w="100%" spacing="5" {...boxProps}>
            <Button type="submit">{labels?.submit || "Submit"}</Button>
            <Button
                onClick={onCancel}
                variant="outline"
                colorScheme="gray">
                {labels?.cancel || "Cancel"}</Button>
        </HStack>
    )

}