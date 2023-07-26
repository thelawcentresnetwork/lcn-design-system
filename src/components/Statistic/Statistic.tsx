import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'

export interface StatisticProps {
  statisticOne: string
  labelOne: string
  statisticTwo?: string
  labelTwo?: string
  backgroundColor?: string
  textColor?: string
}

const Statistic: React.FC<StatisticProps> = ({
  statisticOne,
  labelOne,
  statisticTwo,
  labelTwo,
  backgroundColor,
  textColor,
}) => (
  <Flex
    bg={backgroundColor || 'brand.brightTeal'}
    color={textColor || 'brand.darkBlue'}
    py="1rem"
    pl="1rem"
    maxWidth={statisticTwo ? '439px' : '250px'}
    gap={statisticTwo ? '3.5rem' : 0}
    flexWrap="wrap"
    justifyContent="center"
    as="dl"
  >
    <Box>
      <Text
        as="dd"
        fontWeight={600}
        fontFamily="bodyAlternative"
        fontSize="2.5xl"
      >
        {statisticOne}
      </Text>
      <Text as="dt" maxWidth="15ch" fontSize="2xs">
        {' '}
        {labelOne}
      </Text>
    </Box>

    {statisticTwo && (
      <Box>
        <Text
          as="dd"
          fontWeight={600}
          fontFamily="bodyAlternative"
          fontSize="2.5xl"
        >
          {statisticTwo}
        </Text>
        <Text maxWidth="15ch" as="dt" fontSize="2xs">
          {' '}
          {labelTwo}
        </Text>
      </Box>
    )}
  </Flex>
)

export default Statistic
