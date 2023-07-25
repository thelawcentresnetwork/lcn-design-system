import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import CallToAction from './CallToAction'

const meta: Meta<typeof CallToAction> = {
  component: CallToAction,
}
export default meta
type Story = StoryObj<typeof CallToAction>
export const Default: Story = {
  args: {
    heading:
      'Cuts to legal aid and the cost-of-living crisis means Law Centres are now working harder than ever with even less resources.',
    description:
      'Your donations make a big difference, and every little helps.',
    buttonText: 'Donate to support',
    link: 'https://www.google.com',
  },
  render: (args) => <CallToAction {...args} />,
}
