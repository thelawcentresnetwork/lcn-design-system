import { Button, Flex, Heading, Text, Stack, Box } from '@chakra-ui/react'
import React from 'react'

import LawCentreDetails from '../LawCentreDetails/LawCentreDetails'

interface resultsProps {
  goBackToResults: (back: boolean) => void
  userLocation?: string
}
const Results = ({ goBackToResults, userLocation }: resultsProps) => {
  return (
    <Box>
      <Flex
        justifyContent="space-around"
        flexWrap="wrap-reverse"
        gap="40px"
        pb="50px"
      >
        <Stack spacing={4} flexBasis="440px" flexGrow={1}>
          <Heading variant="h3" as="h2">
            Your local Law Centre details
          </Heading>
          <Text>
            Please bear in mind that the following Law Centres may not be able
            to help due to funding.
          </Text>
          <Text>It might also be useful to look at other sources of help.</Text>
          <Button onClick={() => goBackToResults(false)}>Back to Search</Button>
        </Stack>
        <Text flexGrow={1} flexBasis="440px" fontSize="sm">
          Results for “{userLocation}”
        </Text>
      </Flex>
      <LawCentreDetails />
    </Box>
  )
}

export default Results
