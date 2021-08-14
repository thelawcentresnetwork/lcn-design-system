import React from 'react'

import {
  Box,
  BoxProps
} from "@chakra-ui/react"

interface CardProps extends BoxProps {
  /** Link to wrap around entire card */
  link?: string,
  /** URL to source to use as hero image */
  image?: string
}

function Card({ link, image, children, ...boxProps }: CardProps) {

  return (

    <Box
      p="10"
      bg='#ffffff'
      boxShadow="base"
      _hover={{ boxShadow: "xl" }}
      sx={{ transition: 'box-shadow 0.3s ease-in-out' }}
      borderRadius="lg"
      overflow="hidden"
      {...boxProps}>

      {children}

    </Box>

  )
}

export default Card
