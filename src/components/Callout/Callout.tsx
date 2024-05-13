import React from 'react'
import { Box, BoxProps, Flex } from '@chakra-ui/react'

export interface CalloutProps extends BoxProps {
  backgroundColor?: string
  textColor?: string
  type?: string
}

export const Callout = ({
  backgroundColor,
  textColor,
  children,
  type,
  ...restProps
}: CalloutProps) => {
  return (
    <Flex
      maxWidth={
        type === 'short' ? '540px' : type === 'default' ? '730px' : '843px'
      }
    >
      <Box
        bg={backgroundColor}
        color={textColor}
        position="relative"
        width="100%"
        height="fit-content"
        padding="2rem"
        display="flex"
        flexWrap="wrap"
        mx="min(40px, 20px)"
        {...restProps}
        _after={{
          content: '""',
          position: 'absolute',
          backgroundColor: 'inherit',
          width: 'min(40px, 20px)',
          height: '50%',
          right: ' -20px',
          top: 0,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          backgroundColor: 'inherit',
          width: 'min(40px, 20px)',
          height: '50%',
          left: '-20px',
          bottom: 0,
        }}
      >
        <Box
          maxWidth={
            type === 'short' ? '520px' : type === 'default' ? '550px' : '700px'
          }
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export const CalloutConference2024 = ({
  backgroundColor,
  textColor,
  children,
  type,
  ...restProps
}: CalloutProps) => {
  return (
    <Flex
      maxWidth={
        type === 'short' ? '540px' : type === 'default' ? '730px' : '843px'
      }
    >
      <Box
        bg={backgroundColor}
        color={textColor}
        position="relative"
        width="100%"
        height="fit-content"
        padding="2rem"
        display="flex"
        flexWrap="wrap"
        mx="min(40px, 20px)"
        {...restProps}
        _after={{
          content: '""',
          position: 'absolute',
          backgroundColor: 'inherit',
          width: 'min(40px, 20px)',
          height: '50%',
          right: ' -20px',
          top: 0,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          backgroundColor: 'inherit',
          width: 'min(40px, 20px)',
          height: '50%',
          left: '-20px',
          bottom: 0,
        }}
      >
        <Box
          maxWidth={
            type === 'short' ? '520px' : type === 'default' ? '550px' : '700px'
          }
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}