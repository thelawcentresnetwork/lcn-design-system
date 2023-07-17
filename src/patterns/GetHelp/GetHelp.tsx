import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import { useState } from 'react'

import Results from './Results/Results'

interface findLocationProps {
  input: string
}

interface userLocation {
  searchedInput: string
  latitude: string
  longitude: string
}

const GetHelp = () => {
  const [showResults, setShowResults] = useState<boolean>(false)
  const [showUserLocation, setShowUserLocations] = useState<userLocation>()
  const [showFormError, setShowFormError] = useState<string>()

  const { register, handleSubmit, getValues } = useForm()

  const onSubmit = async ({ input }: findLocationProps) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${input}&format=json&limit=1&countrycodes=gb`
    )
    const location = await response.json()
    if (location.length === 0) {
      setShowFormError('Please enter valid postcode or address')
      return
    }
    try {
      const latitude = location[0].lat
      const longitude = location[0].lon
      const userLocation = {
        latitude: latitude,
        longitude: longitude,
        searchedInput: input,
      }
      setShowUserLocations(userLocation)
      setShowResults(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box>
      {!showResults && (
        <Flex justifyContent="space-around" flexWrap="wrap-reverse" gap="40px">
          <VisuallyHidden>
            <Text as="h2">Search for your local Law Centre</Text>
          </VisuallyHidden>
          <Stack
            as="form"
            spacing={4}
            flexBasis="440px"
            flexGrow={1}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl>
              <FormLabel>Search by postcode</FormLabel>
              {showFormError && (
                <Text color="brand.legacyPink">{showFormError}</Text>
              )}

              <Input type="text" variant="outline" {...register('input')} />
            </FormControl>
            <Button type="submit">Search</Button>
          </Stack>
          <Stack spacing={4} flexGrow={1} flexBasis="440px">
            <Text>
              Please bear in mind that the following Law Centres may not be able
              to help due to funding.
            </Text>
            <Text>
              {' '}
              It might also be useful to look at other sources of help.
            </Text>
          </Stack>
        </Flex>
      )}
      {showResults && (
        <>
          <Results
            userLocation={showUserLocation?.searchedInput}
            goBackToResults={(back: boolean) => {
              setShowResults(back)
            }}
          />
        </>
      )}
    </Box>
  )
}

export default GetHelp
