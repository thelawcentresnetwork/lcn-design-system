import React from 'react'

import {
    Button,
    ButtonProps,
    StackProps,
    HStack
} from '@chakra-ui/react'

interface DActionsProps extends StackProps {
    buttonProps?: {
        submit: ButtonProps,
        cancel: ButtonProps
    },
    labels?: {
        submit: string,
        cancel: string
    }
    onCancel?: () => {}
}

export default function DActions({
    labels,
    onCancel,
    buttonProps,
    ...boxProps
}: DActionsProps) {

    return (

        <HStack w="100%" spacing="5" {...boxProps}>
            <Button
                {...buttonProps?.submit}
                type="submit">
                {labels?.submit || "Submit"}
            </Button>
            {onCancel &&
                <Button
                    onClick={onCancel}
                    variant="outline"
                    colorScheme="gray"
                    {...buttonProps?.cancel}>
                    {labels?.cancel || "Cancel"}</Button>
            }
        </HStack>
    )

}