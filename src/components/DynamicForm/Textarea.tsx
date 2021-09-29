import React from 'react'
import { UseFormReturn, RegisterOptions } from "react-hook-form";
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
    useForm?: UseFormReturn,
    validation?: RegisterOptions
}

export default function DTextarea({
    name,
    label,
    type,
    hint,
    useForm,
    validation,
    ...inputProps
}: DTextareaProps) {

    return (
        <FormControl isInvalid={useForm?.formState.errors[name] || false}>
            {label &&
                <FormLabel>{label}</FormLabel>
            }
            <Textarea
                {...useForm?.register(name, validation)}
                {...inputProps} />
            {useForm?.formState.errors[name] &&
                <FormErrorMessage>
                    <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
                    {useForm.formState.errors[name].message}
                </FormErrorMessage>
            }
            {hint &&
                <FormHelperText>{hint}</FormHelperText>
            }
        </FormControl>
    )

}