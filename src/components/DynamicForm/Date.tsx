import React from 'react'
import { useFormContext } from "react-hook-form";
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
    leftAddon?: string
}

export default function DDate({
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

                <Popover>
                    <PopoverTrigger>
                        <Input
                            autoComplete="off"
                            colorScheme={colorScheme}
                            type={type || "text"}
                            {...register(name)}
                            {...inputProps} />
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent
                            boxShadow="xl"
                            _focus={{ outline: "none" }}>
                            <PopoverArrow />
                            <PopoverBody>
                                <Calendar
                                    date={new Date()}
                                />
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>

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