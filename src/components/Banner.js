import { Box, Button, Stack, Spacer, Flex, HStack, Text, useColorModeValue, Container } from '@chakra-ui/react'

export default function Banner(props) {

  return (
    <Box
      zIndex="200"
      position="relative"
      color="gray.600"
      borderBottomWidth='1px'
      fontFamily="Poppins, Helvetica, sans-serif"
      borderColor="gray.100"
      bg='green.50'>
      <Container width="100%" >
        <Flex

          direction={{ base: 'column', sm: 'row' }}
          pt={{ base: 3, md: "0.9rem" }}
          pb={{ base: 2, md: '0.8rem' }}>
          { props.children }

        </Flex>
      </Container>
    </Box>
  )

}
