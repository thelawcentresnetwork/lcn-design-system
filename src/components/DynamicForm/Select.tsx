import React from 'react'
import { useFormContext, Controller } from "react-hook-form";

//@ts-ignore
import Select from 'react-select';

//@ts-ignore
import ChakraAwesome from '../../utilities/ChakraAwesome';

import {
    SelectProps,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    FormErrorIcon,
} from '@chakra-ui/react'

interface DSelectProps {
    name: string,
    label?: string,
    hint?: string,
    colorScheme?: string,
    options: [{
        value: string,
        label: string
    }]
}

export default function DSelect({
    name,
    label,
    hint,
    options,
    colorScheme,
    ...inputProps
}: DSelectProps) {

    const { control, register, formState: { errors } } = useFormContext();
    let color = colorScheme || 'gray'

    return (
        <FormControl isInvalid={errors[name]}>
            <FormLabel>{label || name}</FormLabel>

            <Controller
                name={name}
                control={control}
                defaultValue={null}
                rules={{ required: false }}
                render={({ field }) => (
                    <Select
                        {...inputProps}
                        theme={(theme) => ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                primary25: 'var(--chakra-colors-green-50)',
                                primary75: 'var(--chakra-colors-green-200)',
                                primary50: 'var(--chakra-colors-green-100)',
                                primary: 'var(--chakra-colors-green-400)',
                                danger: 'var(--chakra-colors-red-500)'
                            }
                        })}
                        styles={{
                            option: (provided, state) => ({
                                ...provided,
                                fontSize: 'var(--chakra-fontSizes-sm)',
                            }),
                            control: (provided, state) => ({
                                ...provided,
                                borderRadius: 'var(--chakra-radii-md)',
                                fontSize: 'var(--chakra-fontSizes-sm)',
                                color: `var(--chakra-colors-${color}-500)`,
                                borderColor: `var(--chakra-colors-${color}-200)`

                            })
                        }}
                        options={options}
                    />
                )}
            />

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