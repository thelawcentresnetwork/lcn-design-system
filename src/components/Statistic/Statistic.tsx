import React from 'react'
import { Stack, Text, Flex } from '@chakra-ui/react'
import { Inspectable } from '../../atoms/Inspectable'
import type { Entry } from 'contentful'

export interface StatisticProps {
  statisticOne: string
  labelOne: string
  statisticTwo?: string
  labelTwo?: string
  textColor?: string
  entry?: Entry<any>
  inspectorProps?: any
}

const Statistic: React.FC<StatisticProps> = ({
  statisticOne,
  labelOne,
  statisticTwo,
  labelTwo,
  textColor,
  entry,
  inspectorProps,
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
      <Inspectable.Text
        entry={entry}
        field="statisticOne"
        inspectorProps={inspectorProps}
        as="dd"
        fontWeight={600}
        fontFamily="bodyAlternative"
        fontSize="2.5xl"
      >
        {statisticOne}
      </Inspectable.Text>
      <Inspectable.Text
        entry={entry}
        field="labelOne"
        inspectorProps={inspectorProps}
        as="dt"
        maxWidth="15ch"
        fontSize="2xs"
      >
        {labelOne}
      </Inspectable.Text>
    </Stack>

    {statisticTwo && (
      <Stack spacing={5}>
        <Inspectable.Text
          entry={entry}
          field="statisticTwo"
          inspectorProps={inspectorProps}
          as="dd"
          fontWeight={600}
          fontFamily="bodyAlternative"
          fontSize="2.5xl"
        >
          {statisticTwo}
        </Inspectable.Text>
        <Inspectable.Text
          entry={entry}
          field="labelTwo"
          inspectorProps={inspectorProps}
          maxWidth="15ch"
          as="dt"
          fontSize="2xs"
        >
          {labelTwo}
        </Inspectable.Text>
      </Stack>
    )}
  </Flex>
)

export default Statistic
