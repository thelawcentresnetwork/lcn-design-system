import React from 'react'
import { useFormContext, Controller } from "react-hook-form";
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
    hint?: string
}

export default function DCheckbox({
    name,
    label,
    type,
    ...inputProps
}: DCheckboxProps) {

    const {
        control,
        register,
        formState: { errors }
    } = useFormContext();

    return (
        <FormControl isInvalid={errors[name]}>

            {type == "switch" &&
                <Flex>
                    <Controller
                        control={control}
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
                    {...register(name)}>
                    {label || name}
                </Checkbox>
            }

            {errors[name] &&
                <FormErrorMessage>
                    <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
                    {errors[name]}
                </FormErrorMessage>
            }

        </FormControl>
    )

}