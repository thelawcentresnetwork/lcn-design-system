import { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import React from 'react'

const meta: Meta = {
  title: 'Hero',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    pageTitle: 'Page Title',
    backgroundColour: 'brand.legacyBlue',
    textColour: 'brand.white.500',
    heading: 'Main Heading',
    children: 'Content',
  },
  render: (args) => <Hero {...args} />,
}
