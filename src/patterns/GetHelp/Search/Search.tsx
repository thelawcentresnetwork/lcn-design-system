import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VisuallyHidden,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

const Search = () => {
  return (
    <Flex justifyContent="space-around" flexWrap="wrap-reverse" gap="40px">
      <VisuallyHidden>
        <Text as="h2">Search for your local Law Centre</Text>
      </VisuallyHidden>
      <Stack spacing={4} flexBasis="440px" flexGrow={1}>
        <FormControl>
          <FormLabel>Search by postcode</FormLabel>
          <Input />
        </FormControl>
        <Button type="submit">Search</Button>
      </Stack>
      <Stack spacing={4} flexGrow={1} flexBasis="440px">
        <Text>
          Please bear in mind that the following Law Centres may not be able to
          help due to funding.
        </Text>
        <Text> It might also be useful to look at other sources of help.</Text>
      </Stack>
    </Flex>
  )
}

export default Search
