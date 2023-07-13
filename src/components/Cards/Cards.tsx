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
}

export const Card: React.FC<CardProps> = ({
  title,
  body,
  link,
  linkText,
  type,
  backgroundColor,
  color,
}) => (
  <Box
    mt="2rem"
    padding="25px 20px 20px 20px"
    width={type === 'short' ? '350px' : '550px'}
    minHeight="210px"
    bg={backgroundColor}
    pl="20px"
    display="flex"
    flexDirection="column"
    color={color}
  >
    <Text fontFamily="bodyAlternative" fontSize="lg">
      {title}
    </Text>

    <Text lineHeight="1.3" fontSize="2xs">
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
)

export const CardWithExtended: React.FC<CardProps> = ({
  type,
  title,
  body,
  link,
  linkText,
  backgroundColor,
  color,
}) => (
  <Box mt="2rem" width={type === 'short' ? '350px' : '550px'} color={color}>
    <Box
      height="54px"
      width="82%"
      left="-20px"
      bottom="85px"
      bg={backgroundColor}
    >
      <Text
        lineHeight="1.9"
        fontFamily="bodyAlternative"
        fontSize="lg"
        pl="20px"
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
    >
      <Text fontSize="2xs">{body}</Text>
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
