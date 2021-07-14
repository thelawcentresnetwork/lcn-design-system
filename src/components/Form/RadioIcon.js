import { useRadio, Box } from "@chakra-ui/react"

export default function RadioIcon(props) {

  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "brand.Green",
          color: "white",
          borderColor: "brand.Green",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        _hover={{
          color: "brand.Orange"
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}
