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
import { lawCentreDetailsProps, getHelpProps } from './GetHelp.types'

interface onSubmitProps {
  input: string
}

interface userLocationProps {
  searchedInput: string
  latitude: string
  longitude: string
  nearestLawCentre?: lawCentreDetailsProps
}

interface calculateDistanceProps {
  lat1: number
  lon1: number
  lat2: number
  lon2: number
}

const calculateDistance = ({
  lat1,
  lon1,
  lat2,
  lon2,
}: calculateDistanceProps) => {
  const R = 6371e3 // metres
  const φ1 = (lat1 * Math.PI) / 180 // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const distance = Math.floor(R * c * 0.00062137) // in miles
  return distance
}

const GetHelp = ({ searchWordOfCaution }: getHelpProps) => {
  const [showResults, setShowResults] = useState<boolean>(false)
  const [showUserLocation, setShowUserLocations] = useState<userLocationProps>()
  const [showFormError, setShowFormError] = useState<string>()

  const { register, handleSubmit, getValues } = useForm()

  const onSubmit = async ({ input }: onSubmitProps) => {
    // Dummy data to replace
    const lawCentres: lawCentreDetailsProps[] = [
      {
        postcode: 'NR22PU',
        lawCentreName: 'Norwich Law Centre',
        latitude: 52.6285576,
        longitude: 1.2923954,
        address: 'Norwich, NR1 1PU',
        email: 'fake@gmail.com',
        telephoneNumber: '01234 25698',
        website: 'www.google.com',
        openingTimes: '24/7',
        areasOfLaw: ['Asylum', 'Housing', 'Personal Injury'],
        regions: 'Norfolk',
        getHelpLink: 'www.google.com',
      },
      {
        postcode: 'BS2 0BH',
        lawCentreName: 'Avon & Bristol Law Centre',
        latitude: 51.4538022,
        longitude: -2.5972985,
        address: 'Bristol, BS2 0BH',
        email: 'fake@email.com',
        telephoneNumber: '01234 25698',
        website: 'www.google.com',
        openingTimes: '24/7',
        areasOfLaw: ['Mental Health', 'Human Rights', 'Personal Injury'],
        regions: 'Avon & Bristol',
        getHelpLink: 'www.google.com',
      },
    ]

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

      for (let i = 0; i < lawCentres.length; i++) {
        const distance = calculateDistance({
          lat1: latitude,
          lon1: longitude,
          lat2: lawCentres[i].latitude,
          lon2: lawCentres[i].longitude,
        })
        Object.assign(lawCentres[i], { distanceFromUser: distance })
      }

      const nearestLawCentre = lawCentres
        .filter((lawCentre) => !Number.isNaN(lawCentre.distanceFromUser))
        .reduce((previous, current) => {
          return current.distanceFromUser! < previous.distanceFromUser!
            ? current
            : previous
        })

      const userLocation = {
        latitude: latitude,
        longitude: longitude,
        searchedInput: input,
        nearestLawCentre: nearestLawCentre,
      }
      setShowUserLocations(userLocation)
      setShowResults(true)
    } catch (error) {
      console.log(error)
      setShowFormError('There has been an error, please try again later')
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
            <Text>{searchWordOfCaution}</Text>
          </Stack>
        </Flex>
      )}
      {showResults && (
        <>
          <Results
            searchWordOfCaution={searchWordOfCaution}
            nearestLawCentre={showUserLocation?.nearestLawCentre}
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
