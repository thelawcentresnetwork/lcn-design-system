import React from 'react';

import { Flex, Button, Text, Link } from "@chakra-ui/react"

export default function Pagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled, path } = props;

  const prevPageUrl =
    currentPage === "2"
      ? `/${path}`
      : `/${path}/page/${parseInt(currentPage, 10) - 1}`;

  const nextPageUrl = `/${path}/page/${parseInt(currentPage, 10) + 1}`;

  return (
    <Flex w="full" justify='space-between'>
      <Button disabled={prevDisabled}>
        {prevDisabled && <span>Previous page</span>}
        {!prevDisabled && (
          <Link href={prevPageUrl}>
            <a>Previous</a>
          </Link>
        )}
      </Button>
      <Text fontSize="xs" pt="3" color="gray.400">
        Page {currentPage} of {totalPages}
      </Text>
      <Button disabled={nextDisabled}>
        {nextDisabled && <span>Next page</span>}
        {!nextDisabled && (
          <Link href={nextPageUrl}>
            <a>Next</a>
          </Link>
        )}
      </Button>
    </Flex>
  );
}