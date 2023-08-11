import React from 'react'
import { Stack, Text, Flex } from '@chakra-ui/react'

export interface StatisticProps {
  statisticOne: string
  labelOne: string
  statisticTwo?: string
  labelTwo?: string
  textColor?: string
}

const Statistic: React.FC<StatisticProps> = ({
  statisticOne,
  labelOne,
  statisticTwo,
  labelTwo,
  textColor,
}) => (
  <Flex
    bg="inherit"
    color={textColor || 'brand.darkBlue'}
    py="1rem"
    pl="1rem"
    maxWidth={statisticTwo ? '439px' : '250px'}
    gap={statisticTwo ? '3.5rem' : 0}
    flexWrap="wrap"
    justifyContent="center"
    as="dl"
  >
    <Stack spacing={5}>
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
    </Stack>

    {statisticTwo && (
      <Stack spacing={5}>
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
      </Stack>
    )}
  </Flex>
)

export default Statistic
