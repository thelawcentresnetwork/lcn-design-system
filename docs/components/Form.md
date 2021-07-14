We use [React Hook Form](https://react-hook-form.com/) to handle all validation and state management. See an [example](https://chakra-ui.com/guides/integrations/with-hook-form) from Chakra.

```jsx

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormErrorIcon,
  FormHelperText,
  Input,
  Checkbox,
  InputLeftAddon,
  InputGroup
} from "@chakra-ui/react";

<VStack spacing="7" p="5">
  <FormControl id="email" isInvalid>
    <FormLabel>Email address</FormLabel>
    <Input type="email" />
      <FormErrorMessage  >
        <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
        Please enter a valid email address
      </FormErrorMessage>
  </FormControl>
  <FormControl id="phone" >
    <FormLabel>Phone number</FormLabel>
    <InputGroup>
      <InputLeftAddon children="+44" />
      <Input type="tel" placeholder="Phone number" />
    </InputGroup>
    <FormHelperText>We'll never share phone number.</FormHelperText>      
  </FormControl>
  <FormControl id="terms">
    <Checkbox colorScheme="green" defaultIsChecked>Agree to terms</Checkbox>
  </FormControl>
  <HStack w="100%" spacing="5">
    <Button>Submit</Button>
    <Button variant="outline" colorScheme="gray">Cancel</Button>
  </HStack>
</VStack>

```