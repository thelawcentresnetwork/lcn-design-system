import React from 'react'
import { Meta } from '@storybook/react'
import Feature, { FeatureProps } from './Feature'
import { selectColours } from '../../atoms/Colours/selectColours'

const dummyFeatureData = [
  {
    fields: {
      label: 'Funding support',
      description: 'Funding and fundraising support',
    },
  },
  {
    fields: {
      label: 'Shared resources',
      description:
        'Shared resources like policy templates and management strategies',
    },
  },
  {
    fields: {
      label: 'Training',
      description:
        'Training workshops, and coaching for leaders, staff, and teams',
    },
  },
  {
    fields: {
      label: 'HR & Admin Support',
      description:
        'Support with staff recruitment and organisational development',
    },
  },
  {
    fields: {
      label: 'Consultancy',
      description:
        'Bespoke access to world-class expertise and trusted consultants',
    },
  },
]
export default {
  title: 'Components/Feature',
  component: Feature,
  args: { featureItems: dummyFeatureData },
  argTypes: {
    textColor: selectColours,
    centred: { control: 'boolean' }
  },
  parameters: {
    backgrounds: {
      default: 'brightTeal',
      values: [
        { name: 'brightTeal', value: '#4cded7' },
        { name: 'grey', value: '#7A7D84' },
      ],
    },
  },
} as Meta

export const FeatureStory = (args: FeatureProps) => <Feature {...args} />
