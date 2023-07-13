import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'

const LawCentreDetails = () => {
  return (
    <>
      <Stack
        spacing={4}
        bg="brand.brightBlue.500"
        color="brand.white.500"
        p="40px"
      >
        <Heading as="h2" variant="h3">
          Haringey Law Centre (0.5 miles)
        </Heading>
        <Text>
          Haringey Law Centre might be able to give advice if you live in the
          following catchment areas: Avon and Bristol, and South West England
          (some services only)
        </Text>
        <Button>Contact</Button>
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
              <ListItem>
                {' '}
                8 Lower Clapton Road
                <br />
                London
                <br />
                Greater London
                <br />
                E5 0PD
              </ListItem>
              <ListItem>
                Telephone: <a href="tel:=+7720 8985 5236">020 8985 5236</a>
              </ListItem>
              <ListItem>
                Email:{' '}
                <a href="mailto:info@haringeylawcentre.org.uk">
                  info@haringeylawcentre.org.uk
                </a>
              </ListItem>
              <ListItem>
                Website: <a href="www.hclc.org.uk">www.hclc.org.uk</a>
              </ListItem>
            </UnorderedList>
            <Text>
              <a href="https://maps.apple.com/?dirflg=w&daddr=51.550593,-0.052204">
                Get directions
              </a>
            </Text>
          </Stack>
          <Stack spacing={3}>
            <Heading as="h3" fontSize="sm">
              Opening times
            </Heading>
            <UnorderedList spacing={3} styleType="none" marginInlineStart={0}>
              <ListItem>Monday 11am – 4:30pm</ListItem>
              <ListItem>Tuesday 11am – 4:30pm </ListItem>
              <ListItem>Wednesday 11am – 4:30pm </ListItem>
              <ListItem>Thursday 11am – 4:30pm</ListItem>
              <ListItem>Friday 11am – 4:30pm</ListItem>
              <ListItem>Saturday closed</ListItem>
              <ListItem>Sunday closed</ListItem>
            </UnorderedList>
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
            Haringey Law Centre might be able to give advice with the following
            areas of law:
          </Text>
          <Stack gap={3}>
            <Heading as="h3" fontSize="sm">
              Housing
            </Heading>
            <Text>
              Law centres can help with problems with your home and how you live
              in it.
            </Text>
            <Text>Your law centre might be able to help with:</Text>
            <UnorderedList spacing={3}>
              <ListItem>Item one </ListItem>
              <ListItem>Item two </ListItem>
              <ListItem>Item three </ListItem>
            </UnorderedList>
            <Text>Your law centre might not be able to help if::</Text>
            <UnorderedList spacing={3}>
              <ListItem>Item one </ListItem>
              <ListItem>Item two </ListItem>
              <ListItem>Item three </ListItem>
            </UnorderedList>
          </Stack>
        </Stack>
      </Flex>
    </>
  )
}

export default LawCentreDetails
