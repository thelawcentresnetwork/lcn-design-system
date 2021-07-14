import { Square, useColorModeValue as mode, useId, useRadio } from '@chakra-ui/react'
import * as React from 'react'

export const RadioOption = (props) => {
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(props)
  const id = useId()

  const { isChecked, ...rest } = getCheckboxProps(props)

  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} aria-labelledby={id} />
      <Square
        id={id}
        rounded="lg"
        fontWeight="bold"
        size={{
          base: '8',
          md: '8',
        }}
        color="gray.600"
        fontSize="0.8rem"
        borderWidth="1px"
        transition="all 0.2s"
        cursor="pointer"
        _hover={{
          bg: mode('green.100', 'whiteAlpha.200'),
        }}
        _active={{
          bg: mode('gray.200', 'whiteAlpha.300'),
        }}
        _checked={{
          bg: mode('brand.Green', 'green.800'),
          color: mode('white', 'black'),
        }}
        _focus={{
          shadow: 'none',
        }}
        {...rest }
      />
    </label>
  )
}
