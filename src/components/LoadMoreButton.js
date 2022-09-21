import { Button } from '@chakra-ui/react'
import { ChakraAwesome } from 'law-centres-design-system'

export default function LoadMoreButton({ path, label }) {
  return (
    <Button
      mb="10"
      mt="8"
      pt="8"
      pb="8"
      as="a"
      bg="gray.100"
      color="gray.600"
      borderWidth="0px"
      boxShadow="none"
      fontWeight="600"
      width="100%"
      fontSize="sm"
      fontFamily="Poppins"
      _hover={{ boxShadow: 'base' }}
      _active={{ boxShadow: 'base' }}
      _focus={{ boxShadow: 'base' }}
      colorScheme="gray"
      variant="outline"
      leftIcon={
        <ChakraAwesome color="gray.700" icon={['fas', 'history']} mr="1" />
      }
      href={path}
    >
      {label}
    </Button>
  )
}
