import React from 'react'
import { useRef } from 'react'
import {
  FormControl,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  FormErrorMessage,
  Box,
  Input,
  FormLabel,
  InputProps,
} from '@chakra-ui/react'
import { UseFormReturn, RegisterOptions, useController } from 'react-hook-form'
import ChakraAwesome from '../../utilities/ChakraAwesome'

interface DFileProps extends InputProps {
  name: string
  placeholder?: string
  label?: string
  hint?: string
  rightAddon?: string
  leftAddon?: string
  useForm: UseFormReturn
  validation?: RegisterOptions
}

const File = ({
  name,
  placeholder,
  label,
  hint,
  colorScheme,
  useForm,
  validation,
  isRequired = false,
  ...groupProps
}: DFileProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const {
    field: { ref, onChange, value, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control: useForm.control,
    rules: validation,
  })

  return (
    <FormControl isInvalid={invalid} {...groupProps}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        {(!value || value.length < 1) && (
          <InputLeftAddon>
            <ChakraAwesome fixedWidth icon={['fal', 'cloud-upload-alt']} />
          </InputLeftAddon>
        )}
        {value && value.length > 0 && (
          <InputLeftAddon
            cursor="pointer"
            bg="white"
            _hover={{
              bg: 'brand.Red',
              color: 'white',
              borderColor: 'brand.Red',
            }}
            borderColor={invalid ? 'brand.Red' : 'gray.200'}
            onClick={() => {
              onChange('')
            }}
            color="red.500"
          >
            <ChakraAwesome fixedWidth icon={['fal', 'times-circle']} />
          </InputLeftAddon>
        )}
        <Input
          onChange={(e) => onChange(e.target.files)}
          type="file"
          ref={inputRef}
          style={{ display: 'none' }}
          {...inputProps}
        />
        <Input
          as={Box}
          _hover={{ bg: 'gray.50' }}
          cursor="pointer"
          borderColor={invalid ? 'brand.Red' : 'gray.200'}
          py="2"
          color="gray.400"
          onClick={() => inputRef?.current?.click()}
        >
          {value && value.length > 0 && value[0].name}
          {!value && (placeholder || 'Select file from computer ...')}
        </Input>
      </InputGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  )
}

export default File
