import React from 'react'
import { UseFormReturn } from "react-hook-form";
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
    leftAddon?: string,
    useForm?: UseFormReturn
}

export default function DInput({
    name,
    label,
    type,
    hint,
    leftAddon,
    rightAddon,
    colorScheme,
    useForm,
    ...inputProps
}: DInputProps) {

    return (
        <>
            {useForm &&
                <FormControl isInvalid={useForm.formState.errors[name]}>
                    {label &&
                        <FormLabel>{label}</FormLabel>
                    }
                    <InputGroup colorScheme={colorScheme}>
                        {leftAddon &&
                            <InputLeftAddon children={leftAddon} />
                        }
                        <Input
                            colorScheme={colorScheme}
                            type={type || "text"}
                            {...useForm.register(name)}
                            {...inputProps} />
                        {rightAddon &&
                            <InputRightAddon children={rightAddon} />
                        }
                    </InputGroup>

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
            }
        </>
    )

}