import { Meta, StoryObj } from '@storybook/react'
import HomepageHero from './HomepageHero'
import React from 'react'

const meta: Meta = {
  component: HomepageHero,
  parameters: { layout: 'centered' },
}

export default meta

type Story = StoryObj<typeof HomepageHero>

export const Default: Story = {
  args: {
    heading: 'for a just and equal society',
    subHeading: 'Everyone’s rights needs to be protected',
    introduction:
      'We champion the work of Law Centres across the UK, support the services they provide, and campaign together on a national scale for equal access to justice for everyone.',
    callToAction: '          Join the fight for a fairer society',
  },
  render: (args) => <HomepageHero {...args} />,
}
