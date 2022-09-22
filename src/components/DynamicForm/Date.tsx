import React from 'react'
import { Controller, RegisterOptions, UseFormReturn } from 'react-hook-form'
import ChakraAwesome from '../../utilities/ChakraAwesome'
/* eslint-disable */
//@ts-ignore
import { Calendar } from 'react-date-range'
/* eslint-enable */

import {
  InputProps,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  FormHelperText,
  FormErrorMessage,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
  Popover,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react'

interface DInputProps extends InputProps {
  name: string
  label?: string
  hint?: string
  rightAddon?: string
  leftAddon?: string
  validation?: RegisterOptions
  useForm: UseFormReturn
}

export default function DDate({
  name,
  label,
  type,
  hint,
  leftAddon,
  rightAddon,
  colorScheme,
  useForm,
  validation,
  ...inputProps
}: DInputProps) {
  const value = useForm?.getValues(name)
  return (
    <FormControl isInvalid={useForm?.formState.errors[name] ? true : false}>
      {label && <FormLabel>{label}</FormLabel>}

      <Controller
        control={useForm?.control}
        name={name}
        rules={validation}
        render={({ field: { onChange, value } }) => (
          <InputGroup colorScheme={colorScheme}>
            {!value && (
              <InputLeftAddon>
                {<ChakraAwesome fixedWidth icon={['fal', 'calendar']} />}
              </InputLeftAddon>
            )}
            {value && (
              <InputLeftAddon
                cursor="pointer"
                bg="white"
                _hover={{
                  bg: 'brand.Red',
                  color: 'white',
                  borderColor: 'brand.Red',
                }}
                onClick={() => {
                  onChange('')
                }}
                color="red.500"
              >
                <ChakraAwesome fixedWidth icon={['fal', 'times-circle']} />
              </InputLeftAddon>
            )}

            <Popover placement="right">
              <PopoverTrigger>
                <Input
                  _hover={{ bg: 'gray.50' }}
                  cursor="pointer"
                  as={Box}
                  color="gray.400"
                  borderLeftRadius="none"
                >
                  <Text py="2">
                    {value && value instanceof Date && value.toDateString()}
                    {value &&
                      !(value instanceof Date) &&
                      new Date(value).toDateString()}
                  </Text>
                </Input>
              </PopoverTrigger>
              <Portal appendToParentPortal={false}>
                <PopoverContent
                  rootProps={{ zIndex: '1500' }}
                  width="24rem"
                  boxShadow="xl"
                  _focus={{ outline: 'none' }}
                >
                  <PopoverArrow />
                  <PopoverBody>
                    <Calendar
                      onChange={(e: Event) => {
                        onChange(e)
                      }}
                      date={
                        value
                          ? value instanceof Date
                            ? value
                            : new Date(value)
                          : new Date()
                      }
                      {...inputProps}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>

            {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
          </InputGroup>
        )}
      />

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
