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
    InputLeftAddon,
    InputGroup,
    InputRightAddon
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
    rightAddon?: string,
    leftAddon?: string,
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
    leftAddon,
    rightAddon,
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

            <InputGroup colorScheme={colorScheme}>
                {leftAddon &&
                    <InputLeftAddon children={leftAddon} />
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
                                            dangerLight: 'var(--chakra-colors-red-300)',
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
                                        multiValue: (provided, state) => ({
                                            ...provided,
                                            background: `var(--chakra-colors-green-500)`,
                                            borderRadius: "20px",
                                            paddingLeft: '5px',
                                            margin: '4px 5px 4px 0'
                                        }),
                                        multiValueLabel: (provided, state) => ({
                                            ...provided,
                                            color: 'white',
                                            borderRadius: '0',
                                            borderWidth: '0',
                                            paddingRight: '5px'
                                        }),
                                        multiValueRemove: (provided, state) => ({
                                            ...provided,
                                            color: 'white',
                                            borderRadius: "0 20px 20px 0",
                                            cursor: 'pointer',
                                            paddingRight: '5px',
                                            marginLeft: '5px',
                                            background: `var(--chakra-colors-green-400)`
                                        }),
                                        placeholder: (defaultStyles) => {
                                            return {
                                                ...defaultStyles,
                                                fontSize: 'var(--chakra-fontSizes-sm)',
                                                color: `var(--chakra-colors-${color}-500)`,
                                            }
                                        },
                                        control: (provided, state) => ({
                                            ...provided,
                                            padding: '1px 7px',
                                            borderRadius: 'var(--chakra-radii-md)',
                                            borderTopLeftRadius: (leftAddon ? 0 : 'var(--chakra-radii-md)'),
                                            borderBottomLeftRadius: (leftAddon ? 0 : 'var(--chakra-radii-md)'),
                                            borderTopRightRadius: (rightAddon ? 0 : 'var(--chakra-radii-md)'),
                                            borderBottomRightRadius: (rightAddon ? 0 : 'var(--chakra-radii-md)'),
                                            fontSize: 'var(--chakra-fontSizes-sm)',
                                            color: `var(--chakra-colors-${color}-500)`,
                                            borderColor: `var(--chakra-colors-${color}-200)`

                                        }),
                                        container: (defaultStyles) => {
                                            return {
                                                ...defaultStyles,
                                                flexGrow: 4
                                            }
                                        },
                                        noOptionsMessage: (defaultStyles) => {
                                            return {
                                                ...defaultStyles,
                                                color: `var(--chakra-colors-${color}-500)`
                                            }
                                        },
                                    }}
                                    inputRef={ref}
                                    options={options}
                                    isMulti={isMulti}
                                    menuPlacement="auto"
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
                                        multiValue: (provided, state) => ({
                                            ...provided,
                                            background: `var(--chakra-colors-green-500)`,
                                            borderRadius: "20px",
                                            paddingLeft: '5px',
                                            margin: '5px 5px 5px 0'
                                        }),
                                        multiValueLabel: (provided, state) => ({
                                            ...provided,
                                            color: 'white',
                                            borderRadius: '0',
                                            borderWidth: '0',
                                            paddingRight: '5px'
                                        }),
                                        multiValueRemove: (provided, state) => ({
                                            ...provided,
                                            color: 'white',
                                            borderRadius: "0 20px 20px 0",
                                            cursor: 'pointer',
                                            marginLeft: '5px',
                                            paddingRight: '5px',
                                            background: `var(--chakra-colors-green-400)`
                                        }),
                                        placeholder: (defaultStyles) => {
                                            return {
                                                ...defaultStyles,
                                                fontSize: 'var(--chakra-fontSizes-sm)',
                                                color: `var(--chakra-colors-${color}-500)`,
                                            }
                                        },
                                        control: (provided, state) => ({
                                            ...provided,
                                            padding: '1px 7px',
                                            borderRadius: 'var(--chakra-radii-md)',
                                            borderTopLeftRadius: (leftAddon ? 0 : 'var(--chakra-radii-md)'),
                                            borderBottomLeftRadius: (leftAddon ? 0 : 'var(--chakra-radii-md)'),
                                            borderTopRightRadius: (rightAddon ? 0 : 'var(--chakra-radii-md)'),
                                            borderBottomRightRadius: (rightAddon ? 0 : 'var(--chakra-radii-md)'),
                                            fontSize: 'var(--chakra-fontSizes-sm)',
                                            color: `var(--chakra-colors-${color}-500)`,
                                            borderColor: `var(--chakra-colors-${color}-200)`
                                        }),
                                        container: (defaultStyles) => {
                                            return {
                                                ...defaultStyles,
                                                flexGrow: 4
                                            }
                                        },
                                        noOptionsMessage: (defaultStyles) => {
                                            return {
                                                ...defaultStyles,
                                                color: `var(--chakra-colors-${color}-500)`
                                            }
                                        },
                                    }}
                                    inputRef={ref}
                                    options={options}
                                    isMulti={isMulti}
                                    menuPlacement="auto"
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
                        </>

                    )}
                />
                {rightAddon &&
                    <InputRightAddon children={rightAddon} />
                }
            </InputGroup>

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