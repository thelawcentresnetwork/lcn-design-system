import React from 'react'
import { useFormContext } from "react-hook-form";
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
    hint?: string
}

export default function DTextarea({
    name,
    label,
    type,
    hint,
    ...inputProps
}: DTextareaProps) {

    const { register, formState: { errors } } = useFormContext();

    return (
        <FormControl isInvalid={errors[name]}>
            <FormLabel>{label || name}</FormLabel>
            <Textarea
                {...register(name)}
                {...inputProps} />
            {errors[name] &&
                <FormErrorMessage>
                    <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
                    {errors[name]}
                </FormErrorMessage>
            }
            {hint &&
                <FormHelperText>{hint}</FormHelperText>
            }
        </FormControl>
    )

}