import React from 'react'
import { UseFormReturn, RegisterOptions } from 'react-hook-form'
import ChakraAwesome from '../../utilities/ChakraAwesome'

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
} from '@chakra-ui/react'

interface DInputProps extends InputProps {
  name: string
  label?: string
  hint?: string
  rightAddon?: string
  leftAddon?: string
  useForm?: UseFormReturn
  validation?: RegisterOptions
}

export default function DInput({
  name,
  label,
  hint,
  leftAddon,
  rightAddon,
  colorScheme,
  validation,
  useForm,
  ...inputProps
}: DInputProps) {
  return (
    <>
      <FormControl isInvalid={useForm?.formState.errors[name] || false}>
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup colorScheme={colorScheme}>
          {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
          <Input
            colorScheme={colorScheme}
            {...useForm?.register(name, validation)}
            {...inputProps}
          />
          {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
        </InputGroup>

        {useForm?.formState.errors[name] && (
          <FormErrorMessage>
            <ChakraAwesome icon={['fas', 'exclamation-circle']} />
            {useForm.formState.errors[name].message}
          </FormErrorMessage>
        )}
        {hint && <FormHelperText>{hint}</FormHelperText>}
      </FormControl>
    </>
  )
}
