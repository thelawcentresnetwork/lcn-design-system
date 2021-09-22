import React from 'react'
import { UseFormReturn } from "react-hook-form";
//@ts-ignore
import ChakraAwesome from '../../utilities/ChakraAwesome';
//@ts-ignore
import { Calendar } from 'react-date-range';

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
    InputRightAddon,
    PopoverArrow,
    PopoverContent,
    PopoverBody,
    Popover,
    PopoverTrigger,
    Portal,
} from '@chakra-ui/react'

interface DInputProps extends InputProps {
    name: string,
    label?: string,
    hint?: string,
    rightAddon?: string,
    leftAddon?: string,
    useForm: UseFormReturn
}

export default function DDate({
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
        <FormControl isInvalid={useForm.formState.errors[name]}>
            {label &&
                <FormLabel>{label}</FormLabel>
            }
            <InputGroup colorScheme={colorScheme}>

                {leftAddon &&
                    <InputLeftAddon children={leftAddon} />
                }

                <Popover>
                    <PopoverTrigger>
                        <Input
                            autoComplete="off"
                            colorScheme={colorScheme}
                            type={type || "text"}
                            {...useForm.register(name)}
                            {...inputProps} />
                    </PopoverTrigger>
                    <PopoverContent
                        width="24rems"
                        boxShadow="xl"
                        _focus={{ outline: "none" }}>
                        <PopoverArrow />
                        <PopoverBody>
                            <Calendar
                                date={new Date()}
                            />
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

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
    )

}