import React from 'react'
import { Meta } from '@storybook/react'
import Statistic, { StatisticProps } from './Statistic'
import { selectColours } from '../../atoms/Colours/selectColours'
export default {
  title: 'Statistic',
  component: Statistic,
  parameters: {
    backgrounds: {
      default: 'brightTeal',
      values: [
        { name: 'brightTeal', value: '#4cded7' },
        { name: 'grey', value: '#7A7D84' },
      ],
    },
  },
  args: {
    statisticOne: ' £11',
    labelOne: 'of direct funding',
    statisticTwo: ' £14',
    labelTwo: 'in services and discounts',
  },

  argTypes: {
    textColor: selectColours,
  },
} as Meta

export const OneStatistic = (args: StatisticProps) => (
  <Statistic statisticOne={args.statisticOne} labelOne={args.labelOne} />
)

export const TwoStatistics = (args: StatisticProps) => <Statistic {...args} />
