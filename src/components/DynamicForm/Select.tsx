import React from 'react'
import { UseFormReturn, Controller, RegisterOptions } from "react-hook-form";

//@ts-ignore
import Select from 'react-select';
//@ts-ignore
import CreatableSelect from 'react-select/creatable';

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
    creatable?: boolean,
    required?: boolean,
    useForm?: UseFormReturn,
    validation?: RegisterOptions,
    isMulti?: boolean,
    options?: {
        value: string,
        label: string
    }[]
}

export default function DSelect({
    name,
    label,
    hint,
    options,
    creatable,
    required,
    useForm,
    colorScheme,
    validation,
    isMulti,
    ...inputProps
}: DSelectProps) {

    let color = colorScheme || 'gray'

    const generateValue = (value: any, isMulti: any, options: any) => {

        if (Array.isArray(value)) {
            return value?.map((val: any) => {

                let opt = options?.find((o: any) => o.value == val)
                if (opt) {
                    return options?.find((o: any) => o.value == val)
                } else if (typeof val == 'string') {
                    return { value: val, label: val }
                }

            })
        } else {
            return options?.find((o: any) => o.value == value)
        }

    }

    return (
        <FormControl isInvalid={useForm?.formState.errors[name] || false}>
            {label &&
                <FormLabel>{label}</FormLabel>
            }

            <Controller
                name={name}
                control={useForm?.control}
                rules={validation}
                render={({
                    field: { onChange, onBlur, value, name, ref },
                }) => (

                    <>
                        {creatable &&
                            <CreatableSelect
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'var(--chakra-colors-green-50)',
                                        primary75: 'var(--chakra-colors-green-200)',
                                        primary50: 'var(--chakra-colors-green-100)',
                                        primary: 'var(--chakra-colors-green-400)',
                                        danger: 'white',
                                        dangerLight: 'var(--chakra-colors-red-500)',
                                        neutral20: 'var(--chakra-colors-gray-100)',
                                        neutral30: 'var(--chakra-colors-gray-100)',
                                        neutral10: 'var(--chakra-colors-gray-100)',
                                        neutral40: 'var(--chakra-colors-gray-100)'
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
                                inputRef={ref}
                                options={options}
                                isMulti={isMulti}
                                value={generateValue(value, isMulti, options)}
                                onChange={selected => {
                                    if (selected && Array.isArray(selected)) {
                                        onChange(selected.map((o) => o.value))
                                    } else if (selected && !Array.isArray(selected)) {
                                        onChange(selected['value'])
                                    }
                                }}
                                {...inputProps}
                            />
                        }
                        {!creatable &&
                            <Select
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'var(--chakra-colors-green-50)',
                                        primary75: 'var(--chakra-colors-green-200)',
                                        primary50: 'var(--chakra-colors-green-100)',
                                        primary: 'var(--chakra-colors-green-400)',
                                        danger: 'white',
                                        dangerLight: 'var(--chakra-colors-red-500)',
                                        neutral20: 'var(--chakra-colors-gray-100)',
                                        neutral30: 'var(--chakra-colors-gray-100)',
                                        neutral10: 'var(--chakra-colors-gray-100)',
                                        neutral40: 'var(--chakra-colors-gray-100)'
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
                                inputRef={ref}
                                options={options}
                                isMulti={isMulti}
                                value={(isMulti ? options?.filter((o) => value?.includes(o.value)) : options?.find((o) => o.value == value))}
                                onChange={selected => {
                                    if (selected && Array.isArray(selected)) {
                                        onChange(selected.map((o) => o.value))
                                    } else if (selected && !Array.isArray(selected)) {
                                        onChange(selected['value'])
                                    }
                                }}
                                {...inputProps}
                            />
                        }
                    </>

                )}
            />

            {useForm?.formState.errors[name] &&
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