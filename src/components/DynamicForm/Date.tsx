import React from 'react'
import { useController, Controller, RegisterOptions, UseFormReturn } from "react-hook-form";
//@ts-ignore
import ChakraAwesome from '../../utilities/ChakraAwesome';
//@ts-ignore
import { Calendar } from 'react-date-range';

import {
    InputProps,
    FormControl,
    FormLabel,
    Input,
    Box,
    Text,
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
    validation?: RegisterOptions,
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
    validation,
    ...inputProps
}: DInputProps) {

    return (
        <FormControl isInvalid={useForm.formState.errors[name] || false}>
            {label &&
                <FormLabel>{label}</FormLabel>
            }

            <Controller
                control={useForm.control}
                name={name}
                rules={validation}
                render={({
                    field: { onChange, value },
                }) => (

                    <InputGroup colorScheme={colorScheme}>

                        {(!value) &&
                            <InputLeftAddon children={<ChakraAwesome fixedWidth icon={['fal', "calendar-days"]} />} />
                        }
                        {(value) &&
                            <InputLeftAddon
                                cursor="pointer"
                                bg="white"
                                _hover={{ bg: "brand.Red", color: 'white', borderColor: "brand.Red" }}
                                onClick={() => { onChange('') }}
                                color="red.500">
                                <ChakraAwesome fixedWidth icon={['fa', 'circle-xmark']} />
                            </InputLeftAddon>
                        }

                        <Popover>
                            <PopoverTrigger>
                                <Input
                                    _hover={{ bg: "gray.50" }}
                                    cursor="pointer"
                                    as={Box}
                                    color="gray.400"
                                    borderLeftRadius="none">
                                    <Text py="2">
                                        {value && (value instanceof Date) && value.toDateString()}
                                        {value && !(value instanceof Date) && new Date(value).toDateString()}
                                    </Text>
                                </Input>
                            </PopoverTrigger>
                            <PopoverContent
                                width="24rems"
                                boxShadow="xl"
                                _focus={{ outline: "none" }}>
                                <PopoverArrow />
                                <PopoverBody>
                                    <Calendar
                                        onChange={(e: Event) => { onChange(e) }}
                                        date={new Date()}
                                        {...inputProps} />
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>


                        {rightAddon &&
                            <InputRightAddon children={rightAddon} />
                        }
                    </InputGroup>
                )} />

            {useForm.formState.errors[name] &&
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