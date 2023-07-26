import React from 'react'
import { Meta } from '@storybook/react'
import Statistic, { StatisticProps } from './Statistic'
import { selectColours } from '../../atoms/Colours/selectColours'
export default {
  title: 'Statistic',
  component: Statistic,
  args: {
    statisticOne: ' £11',
    labelOne: 'of direct funding',
    statisticTwo: ' £14',
    labelTwo: 'in services and discounts',
  },

  argTypes: {
    backgroundColor: selectColours,
    textColor: selectColours,
  },
} as Meta

export const OneStatistic = (args: StatisticProps) => (
  <Statistic statisticOne={args.statisticOne} labelOne={args.labelOne} />
)

export const TwoStatistics = (args: StatisticProps) => <Statistic {...args} />
