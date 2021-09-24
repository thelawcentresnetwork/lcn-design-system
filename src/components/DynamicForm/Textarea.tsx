import React from 'react'
import { UseFormReturn } from "react-hook-form";
//@ts-ignore
import ChakraAwesome from '../../utilities/ChakraAwesome';

import {
    TextareaProps,
    FormControl,
    FormLabel,
    Textarea,
    FormHelperText,
    FormErrorMessage,
    FormErrorIcon
} from '@chakra-ui/react'

interface DTextareaProps extends TextareaProps {
    name: string,
    type?: string,
    label?: string,
    hint?: string,
    rows?: number,
    useForm: UseFormReturn
}

export default function DTextarea({
    name,
    label,
    type,
    hint,
    rows,
    useForm,
    ...inputProps
}: DTextareaProps) {

    return (
        <FormControl isInvalid={useForm.formState.errors[name]}>
            {label &&
                <FormLabel>{label}</FormLabel>
            }
            <Textarea
                rows={rows || 3}
                {...useForm.register(name)}
                {...inputProps} />
            {useForm.formState.errors[name] &&
                <FormErrorMessage>
                    <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
                    {useForm.formState.errors[name]}
                </FormErrorMessage>
            }
            {hint &&
                <FormHelperText>{hint}</FormHelperText>
            }
        </FormControl>
    )

}