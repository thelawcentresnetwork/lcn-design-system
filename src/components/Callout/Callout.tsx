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
      pr="3.5rem"
      maxWidth={
        type === 'short' ? '540px' : type === 'default' ? '730px' : '843px'
      }
    >
      <Box
        bg={backgroundColor}
        color={textColor}
        position="relative"
        width="100%"
        ml="5rem"
        height="fit-content"
        padding="2rem"
        display="flex"
        flexWrap="wrap"
        {...restProps}
        _after={{
          content: '""',
          position: 'absolute',
          backgroundColor: 'inherit',
          width: '40px',
          height: '50%',
          right: '-38px',
          top: 0,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          backgroundColor: 'inherit',
          width: '38px',
          height: '50%',
          left: '-38px',
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
export default Callout
