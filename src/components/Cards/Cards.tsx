import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FaAngleLeft } from 'react-icons/fa'

export interface CardProps {
  title: string
  body: string
  link?: string
  linkText?: string
  type: string
  backgroundColor: string
  color: string
  image?: string
  alt?: string
}

export const Card: React.FC<CardProps> = ({
  title,
  body,
  link,
  linkText,
  type,
  backgroundColor,
  color,
  image,
  alt,
}) => (
  <Box
    maxWidth={type === 'short' ? '350px' : '550px'}
    color={color}
    position="relative"
    display="flex"
    flexDirection="column"
  >
    {image && (
      <Box width="inherit">
        <img alt={alt} src={image} width="100%" height="auto" />
      </Box>
    )}

    <Box
      padding="25px 20px 20px 20px"
      width="inherit"
      height="100%"
      bg={backgroundColor}
      display="flex"
      flexDirection="column"
    >
      <Text lineHeight="1" fontFamily="bodyAlternative" fontSize="lg">
        {title}
      </Text>

      <Text mt="1.5rem" lineHeight="1.3" fontSize="2xs">
        {body}
      </Text>

      {link && (
        <Box href={link} alignItems="center" as="a" mt="2rem" display="flex">
          <FaAngleLeft />
          <Text ml="0.3rem" fontSize="3xs">
            {' '}
            {linkText}
          </Text>
        </Box>
      )}
    </Box>
  </Box>
)

export const CardWithExtended: React.FC<CardProps> = ({
  type,
  title,
  body,
  link,
  linkText,
  image,
  backgroundColor,
  color,
}) => (
  <Box
    maxWidth={type === 'short' ? '350px' : '550px'}
    color={color}
    position="relative"
    display="flex"
    flexDirection="column"
    bg={image ? backgroundColor : 'none'}
  >
    <Box width="inherit">
      <img src={image} width="100%" height="auto" />
    </Box>
    <Box
      position="relative"
      width="100%"
      flex="1"
      display="flex"
      flexDirection="column"
      bottom={image ? '55px' : '0'}
      color={color}
    >
      <Box height="auto" width="82%" bg={backgroundColor}>
        <Text
          lineHeight="1.5"
          fontFamily="bodyAlternative"
          fontSize="sm"
          pl="20px"
          mt="0.3rem"
          mr="1rem"
        >
          {title}
        </Text>
      </Box>

      <Box
        padding="25px 20px 20px 20px"
        minHeight="210px"
        bg={backgroundColor}
        pl="20px"
        display="flex"
        flexDirection="column"
        color={color}
        position="relative"
        flexGrow="1"
      >
        <Text fontSize="2xs">{body}</Text>
        {link && (
          <Box href={link} alignItems="center" as="a" mt="2rem" display="flex">
            <FaAngleLeft />
            <Text ml="0.3rem" fontSize="2xs">
              {' '}
              {linkText}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  </Box>
)
