import React from 'react'
import { Meta } from '@storybook/react'
import { Hero, HeroProps } from './Hero'

export default {
  title: 'Hero',

  parameters: { layout: 'fullscreen' },
} as Meta

export const Default = (args: HeroProps) => <Hero {...args} />
Default.args = {
  pageTitle: 'Page Title',
  backgroundColour: '#425390',
  textColour: 'brand.white.500',
  heading: 'Main Heading',
  children: 'Content',
}
