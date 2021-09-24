import React from 'react'
import { UseFormReturn } from "react-hook-form";
//@ts-ignore
import ChakraAwesome from '../../utilities/ChakraAwesome';

import {
    RadioProps,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    FormErrorIcon,
    Radio,
    RadioGroup,
    Stack
} from '@chakra-ui/react'

interface DRadioProps extends RadioProps {
    name: string,
    label?: string,
    hint?: string,
    useForm: UseFormReturn,
    options: [{
        value: string,
        label: string
    }]
}

export default function DRadio({
    name,
    label,
    hint,
    options,
    useForm,
    ...inputProps
}: DRadioProps) {

    return (
        <FormControl isInvalid={useForm.formState.errors[name]}>
            <FormLabel>{label || name}</FormLabel>

            {hint &&
                <FormHelperText mb="4">{hint}</FormHelperText>
            }

            <RadioGroup>
                <Stack spacing={4}>
                    {options.map((option) => (
                        <Radio
                            {...inputProps}
                            value={option.value}
                            key={option.value}>
                            {option.label}
                        </Radio>
                    ))}
                </Stack>
            </RadioGroup>

            {useForm.formState.errors[name] &&
                <FormErrorMessage>
                    <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
                    {useForm.formState.errors[name]}
                </FormErrorMessage>
            }

        </FormControl>
    )

}