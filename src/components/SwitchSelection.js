import { Text, Flex, Switch, Box } from "@chakra-ui/react"
import { ChakraAwesome } from '../utilities/ChakraAwesome'

export default function SwitchSelection(props) {
  const { title, children, checked, onChange, isReadOnly, isDisabled, size, isLoading, defaultChecked } = props
  return (
    <Flex align="center" pos="relative" justify="space-between">
      <Box flex="1">
        <Box fontFamily="Poppins, Helvetica, sans-serif" as="h4" color="gray.700" fontSize="sm" fontWeight="600" maxW="xl">
          {title}
        </Box>
        {children && (
          <Box maxW="xl" color="gray.500" fontSize="sm">
            {children}
          </Box>
        )}
      </Box>
      <Box>
        { isLoading &&
          <ChakraAwesome icon={['fas','spinner']} color="gray.300" spin />
        }
        { !isLoading &&
          <Switch
            isDisabled={ isDisabled || isReadOnly }
            onChange={onChange}
            isChecked={checked}
            defaultChecked={defaultChecked}
            size={size || "lg"}
            colorScheme="teal" />
        }
      </Box>
    </Flex>
  )

}
