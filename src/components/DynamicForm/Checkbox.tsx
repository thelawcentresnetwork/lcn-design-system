import React from 'react'
import { UseFormReturn, Controller } from "react-hook-form";
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
    useForm: UseFormReturn
}

export default function DCheckbox({
    name,
    label,
    type,
    useForm,
    ...inputProps
}: DCheckboxProps) {

    return (
        <FormControl isInvalid={useForm.formState.errors[name]}>

            {type == "switch" &&
                <Flex>
                    <Controller
                        control={useForm.control}
                        name={name}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <Switch
                                mr="3"
                                onChange={(e) => onChange(e.target.checked)}
                                isChecked={value}
                            />
                        )}
                    />
                    <FormLabel htmlFor={name}>
                        {label || name}
                    </FormLabel>
                </Flex>

            }

            {!type &&
                <Checkbox
                    {...inputProps}
                    {...useForm.register(name)}>
                    {label || name}
                </Checkbox>
            }

            {useForm.formState.errors[name] &&
                <FormErrorMessage>
                    <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
                    {useForm.formState.errors[name]}
                </FormErrorMessage>
            }

        </FormControl>
    )

}