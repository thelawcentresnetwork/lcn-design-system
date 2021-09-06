import React from 'react'
import { useFormContext } from "react-hook-form";
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
    ...inputProps
}: DRadioProps) {

    const { register, formState: { errors } } = useFormContext();

    return (
        <FormControl isInvalid={errors[name]}>
            <FormLabel>{label || name}</FormLabel>

            <RadioGroup>
                <Stack spacing={5} direction="row">
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