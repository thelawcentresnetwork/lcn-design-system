import React from 'react'
import { UseFormReturn, RegisterOptions } from 'react-hook-form'
import ChakraAwesome from '../../utilities/ChakraAwesome'

import {
  TextareaProps,
  FormControl,
  FormLabel,
  Textarea,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react'

interface DTextareaProps extends TextareaProps {
  name: string
  type?: string
  label?: string
  hint?: string
  rows?: number
  useForm?: UseFormReturn
  validation?: RegisterOptions
}

export default function DTextarea({
  name,
  label,
  type,
  hint,
  useForm,
  validation,
  ...inputProps
}: DTextareaProps) {
  return (
    <FormControl isInvalid={useForm?.formState.errors[name] ? true : false}>
      {label && <FormLabel>{label}</FormLabel>}
      <Textarea {...useForm?.register(name, validation)} {...inputProps} />
      {useForm?.formState.errors[name] && (
        <FormErrorMessage>
          <ChakraAwesome icon={['fas', 'exclamation-circle']} />
          {useForm?.formState?.errors[name]?.message}
        </FormErrorMessage>
      )}
      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  )
}
