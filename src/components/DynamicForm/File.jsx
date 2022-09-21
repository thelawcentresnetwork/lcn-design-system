import React from 'react'

import {
  FormControl,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  FormErrorMessage,
  Box,
  Input,
  FormLabel,
} from '@chakra-ui/react'

import { useController } from 'react-hook-form'
import { useRef } from 'react'
import ChakraAwesome from '../../utilities/ChakraAwesome'

const File = ({
  name,
  placeholder,
  useForm,
  label,
  hint,
  validation,
  colorScheme,
  isRequired = false,
  ...groupProps
}) => {
  const inputRef = useRef()

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
          <InputLeftAddon
            children={
              <ChakraAwesome fixedWidth icon={['fal', 'cloud-arrow-up']} />
            }
          />
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
            <ChakraAwesome fixedWidth icon={['fa', 'circle-xmark']} />
          </InputLeftAddon>
        )}
        <Input
          onChange={(e) => onChange(e.target.files)}
          type="file"
          name={name}
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
          onClick={() => inputRef.current.click()}
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
