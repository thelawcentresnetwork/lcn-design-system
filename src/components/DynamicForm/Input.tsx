import React from 'react'
import { useFormContext } from "react-hook-form";
//@ts-ignore
import ChakraAwesome from '../../utilities/ChakraAwesome';

import {
    InputProps,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
    FormErrorIcon,
    InputLeftAddon,
    InputGroup,
    InputRightAddon
} from '@chakra-ui/react'

interface DInputProps extends InputProps {
    name: string,
    type?: string,
    label?: string,
    hint?: string,
    rightAddon?: string,
    leftAddon?: string
}

export default function DInput({
    name,
    label,
    type,
    hint,
    leftAddon,
    rightAddon,
    colorScheme,
    ...inputProps
}: DInputProps) {

    const { register, formState: { errors } } = useFormContext();

    return (
        <FormControl isInvalid={errors[name]}>
            <FormLabel>{label || name}</FormLabel>
            <InputGroup colorScheme={colorScheme}>
                {leftAddon &&
                    <InputLeftAddon children={leftAddon} />
                }
                <Input
                    colorScheme={colorScheme}
                    type={type || "text"}
                    {...register(name)}
                    {...inputProps} />
                {rightAddon &&
                    <InputRightAddon children={rightAddon} />
                }
            </InputGroup>

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