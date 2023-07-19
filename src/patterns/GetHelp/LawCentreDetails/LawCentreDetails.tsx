import {
  Button,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'

import { lawCentreDetailsProps } from '../GetHelp.types'

interface nearestLawCentreProps {
  lawCentreDetails?: lawCentreDetailsProps
}

const LawCentreDetails = ({ lawCentreDetails }: nearestLawCentreProps) => {
  return (
    <>
      <Stack
        spacing={4}
        bg="brand.brightBlue.500"
        color="brand.white.500"
        p="40px"
      >
        <Heading as="h2" variant="h3">
          {lawCentreDetails?.lawCentreName} (
          {lawCentreDetails?.distanceFromUser} miles)
        </Heading>
        <Text>
          {lawCentreDetails?.lawCentreName} might be able to give advice if you
          live in the following catchment areas: {lawCentreDetails?.regions}
          (some services only)
        </Text>
        <Button as="a" href={`${lawCentreDetails?.getHelpLink}`}>
          Contact
        </Button>
      </Stack>
      <Flex justifyContent="space-around" flexWrap="wrap-reverse">
        <Stack
          flexBasis="370px"
          bg="brand.legacyTeal"
          color="brand.white.500"
          p="40px"
          flexGrow={1}
          spacing={5}
        >
          <Stack as="address" spacing={3}>
            <Heading as="h3" fontSize="sm">
              Contact Details
            </Heading>
            <UnorderedList spacing={3} styleType="none" marginInlineStart={0}>
              <ListItem>{lawCentreDetails?.address}</ListItem>
              <ListItem>
                Telephone:{' '}
                <a href={`tel:=${lawCentreDetails?.telephoneNumber}`}>
                  {lawCentreDetails?.telephoneNumber}
                </a>
              </ListItem>
              <ListItem>
                Email:{' '}
                <a href={`mailto:${lawCentreDetails?.email}`}>
                  {lawCentreDetails?.email}
                </a>
              </ListItem>
              <ListItem>
                Website:{' '}
                <a href={`${lawCentreDetails?.website}`}>
                  {lawCentreDetails?.website}
                </a>
              </ListItem>
            </UnorderedList>
            <Text>
              <a
                href={`https://maps.apple.com/?dirflg=w&daddr=${lawCentreDetails?.latitude},${lawCentreDetails?.longitude}`}
              >
                Get directions
              </a>
            </Text>
          </Stack>
          <Stack spacing={3}>
            <Heading as="h3" fontSize="sm">
              Opening times
            </Heading>
            <Text>{lawCentreDetails?.openingTimes}</Text>
          </Stack>
        </Stack>
        <Stack
          flexGrow={1}
          spacing={4}
          flexBasis="730px"
          bg="brand.legacyBlue"
          color="brand.white.500"
          p="40px"
          borderRight="12px solid"
          sx={{
            borderImage: 'linear-gradient(#4CDED7 10%, 10%, #FCC24B 90%)1',
          }}
        >
          <Text fontSize="sm">
            This Law Centre might be able to give advice with the following
            areas of law:
          </Text>
          <Stack gap={3}>
            {lawCentreDetails?.areasOfLaw &&
              lawCentreDetails?.areasOfLaw.map((areaOfLaw, key) => {
                return (
                  <Stack spacing={3} key={key}>
                    <Heading as="h3" fontSize="sm">
                      {areaOfLaw}
                    </Heading>
                  </Stack>
                )
              })}
          </Stack>
        </Stack>
      </Flex>
    </>
  )
}

export default LawCentreDetails
