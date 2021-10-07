import React from 'react'
import { UseFormReturn, Controller, RegisterOptions } from "react-hook-form";
//@ts-ignore
import ChakraAwesome from '../../utilities/ChakraAwesome';

import {
    CheckboxProps,
    FormControl,
    FormLabel,
    Checkbox,
    Switch,
    Flex,
    FormHelperText,
    FormErrorMessage,
    FormErrorIcon
} from '@chakra-ui/react'

interface DCheckboxProps extends CheckboxProps {
    name: string,
    type?: string,
    label?: string,
    hint?: string,
    useForm?: UseFormReturn,
    validation?: RegisterOptions
}

export default function DCheckbox({
    name,
    label,
    type,
    useForm,
    validation,
    ...inputProps
}: DCheckboxProps) {

    return (
        <FormControl isInvalid={useForm?.formState.errors[name] || false}>

            {type == "switch" &&
                <Flex alignItems='center'>
                    <Controller
                        control={useForm?.control}
                        name={name}
                        rules={validation}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <Switch
                                mr="3"
                                onChange={(e) => onChange(e.target.checked)}
                                isChecked={value}
                                size={inputProps.size}
                                defaultChecked={inputProps.defaultChecked}
                            />
                        )}
                    />
                    <FormLabel
                        fontSize={inputProps.size}
                        fontFamily="Lato, sans-serif"
                        fontWeight="400"
                        pb="0"
                        mb="0"
                        pl="1" color="gray.800" htmlFor={name}>
                        {label || name}
                    </FormLabel>
                </Flex>

            }

            {!type &&
                <Checkbox
                    {...inputProps}
                    {...useForm?.register(name, validation)}>
                    {label || name}
                </Checkbox>
            }

            {useForm?.formState.errors[name] &&
                <FormErrorMessage>
                    <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
                    {useForm.formState.errors[name].message}
                </FormErrorMessage>
            }

        </FormControl>
    )

}