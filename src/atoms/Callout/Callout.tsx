import React from 'react'
import { Box, BoxProps, Flex } from '@chakra-ui/react'

export interface CalloutProps extends BoxProps {
  backgroundColor?: string
  textColor?: string
  type?: string
}

const Callout = ({
  backgroundColor,
  textColor,
  children,
  type,
  ...restProps
}: CalloutProps) => {
  return (
    <Flex
      as="section"
      pr="3.5rem"
      maxWidth={
        type === 'short' ? '540px' : type === 'default' ? '730px' : '843px'
      }
    >
      <Box
        bg={backgroundColor}
        color={textColor}
        mt="3rem"
        position="relative"
        width="100%"
        ml="5rem"
        height="fit-content"
        padding="3rem"
        display="flex"
        flexWrap="wrap"
        {...restProps}
        _after={{
          content: '""',
          position: 'absolute',
          backgroundColor: 'inherit',
          width: '50px',
          height: '50%',
          right: '-48px',
          bottom: 0,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          backgroundColor: 'inherit',
          width: '50px',
          height: '50%',
          left: '-48px',
          top: 0,
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
export default Callout
