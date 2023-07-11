import { Stack, Button, Text } from '@chakra-ui/react'
import React from 'react'

const NoResults = () => {
  return (
    <Stack width="min(100%, 440px)" spacing={4}>
      <Text fontSize="sm">No Results for “E8 3QN”</Text>
      <Text>
        We are sorry but there is no Law Centre that covers your post code.
      </Text>
      <Text>
        It might also be useful to see other sources of advice or guidance.
      </Text>
      <Button>Back to search</Button>
    </Stack>
  )
}

export default NoResults
