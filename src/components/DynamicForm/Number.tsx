import React from 'react'
import { UseFormReturn, RegisterOptions } from 'react-hook-form'
import ChakraAwesome from '../../utilities/ChakraAwesome'

import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  NumberInputProps,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

interface NumberProps extends NumberInputProps {
  name: string
  label?: string
  hint?: string
  rightAddon?: string
  leftAddon?: string
  useForm?: UseFormReturn
  validation?: RegisterOptions
}

export default function Number({
  name,
  label,
  hint,
  leftAddon,
  rightAddon,
  colorScheme,
  useForm,
  validation,
  ...inputProps
}: NumberProps) {
  return (
    <>
      <FormControl isInvalid={useForm?.formState.errors[name] || false}>
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup colorScheme={colorScheme}>
          {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
          <NumberInput {...inputProps}>
            <NumberInputField {...useForm?.register(name, validation)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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
