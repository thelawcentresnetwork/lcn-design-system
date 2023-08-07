import { Meta, StoryObj } from '@storybook/react'
import HomepageHero from './HomepageHero'
import React from 'react'

const meta: Meta = {
  title: 'components/Hero/Homepage Hero',
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
    callToAction: 'Join the fight for a fairer society',
    heroImage: 'homepage-hero-image.png',
    heroImageAltText:
      'A collage of people standing up for an equal and fair society',
    headingBackground: 'heading-background.svg',
    callToActionLink: 'https://google.com',
  },
  render: (args) => <HomepageHero {...args} />,
}
