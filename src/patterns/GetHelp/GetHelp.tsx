import { Box } from '@chakra-ui/react'
import React from 'react'

import Search from './Search/Search'
import Results from './Results/Results'
import NoResults from './NoResults/NoResults'

const GetHelp = () => {
  return (
    <Box>
      <Search />
      <Results />
      <NoResults />
    </Box>
  )
}

export default GetHelp
