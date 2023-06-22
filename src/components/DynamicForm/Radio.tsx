import React from 'react'
import { UseFormReturn, Controller, RegisterOptions } from 'react-hook-form'
import ChakraAwesome from '../../utilities/ChakraAwesome'

import {
  RadioProps,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'

interface DRadioProps extends RadioProps {
  name: string
  label?: string
  hint?: string
  useForm?: UseFormReturn
  validation?: RegisterOptions
  options?: {
    value: string
    label: string
  }[]
}

export default function DRadio({
  name,
  label,
  hint,
  options,
  useForm,
  validation,
  ...inputProps
}: DRadioProps) {
  return (
    <FormControl isInvalid={useForm?.formState.errors[name] ? true : false}>
      <FormLabel>{label || name}</FormLabel>

      {hint && <FormHelperText mb="4">{hint}</FormHelperText>}

      <Controller
        control={useForm?.control}
        name={name}
        rules={validation}
        render={({ field: { onChange, value } }) => (
          <RadioGroup onChange={onChange} value={value}>
            <Stack spacing={4}>
              {options?.map((option) => (
                <Radio {...inputProps} value={option.value} key={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      />

      {useForm?.formState.errors[name] && (
        <FormErrorMessage>
          <ChakraAwesome icon={['fas', 'exclamation-circle']} />
          {useForm.formState?.errors[name]?.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
