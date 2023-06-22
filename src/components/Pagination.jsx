import React from 'react'
import { Flex, Button, Text } from '@chakra-ui/react'

export default function Pagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled, path } = props

  const prevPageUrl =
    currentPage === '2'
      ? `/${path}`
      : `/${path}/page/${parseInt(currentPage, 10) - 1}`

  const nextPageUrl = `/${path}/page/${parseInt(currentPage, 10) + 1}`

  return (
    <Flex w="full" justify="space-between">
      <Button disabled={prevDisabled} as="a" href={prevPageUrl}>
        {prevDisabled && <span>Previous page</span>}
        {!prevDisabled && 'Previous'}
      </Button>
      <Text fontSize="xs" pt="3" color="gray.400">
        Page {currentPage} of {totalPages}
      </Text>
      <Button disabled={nextDisabled} as="a" href={nextPageUrl}>
        {nextDisabled && <span>Next page</span>}
        {!nextDisabled && 'Next'}
      </Button>
    </Flex>
  )
}
