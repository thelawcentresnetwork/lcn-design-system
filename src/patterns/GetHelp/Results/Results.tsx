import { Button, Flex, Heading, Text, Stack, Box } from '@chakra-ui/react'
import React from 'react'

import LawCentreDetails from '../LawCentreDetails/LawCentreDetails'
import { lawCentreDetailsProps } from '../GetHelp.types'

interface resultsProps {
  goBackToResults: (back: boolean) => void
  userLocation?: string
  nearestLawCentre?: lawCentreDetailsProps
  searchWordOfCaution: string
}

const Results = ({
  goBackToResults,
  userLocation,
  nearestLawCentre,
  searchWordOfCaution,
}: resultsProps) => {
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
          <Text>{searchWordOfCaution}</Text>
          <Button onClick={() => goBackToResults(false)}>Back to Search</Button>
        </Stack>
        <Text flexGrow={1} flexBasis="440px" fontSize="sm">
          Results for “{userLocation}”
        </Text>
      </Flex>
      <LawCentreDetails lawCentreDetails={nearestLawCentre} />
    </Box>
  )
}

export default Results
