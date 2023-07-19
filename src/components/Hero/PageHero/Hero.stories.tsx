import { Meta, StoryObj } from '@storybook/react'
import Hero from './Hero'
import React from 'react'
import { selectColours } from '../../../atoms/Colours/selectColours'
import pageImage from '../../../assets/heroimage.png'

const meta: Meta = {
  component: Hero,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    pageTitle: '— about law centres network',
    backgroundColour: 'brand.legacyBlue',
    textColour: 'brand.white.500',
    heading: 'Fairness is at the heart of what we do',
    subHeading:
      'Lorem ipsum dolor sit amet consectetur. Sed hac laoreet risus iaculis donec. In dolor tincidunt sed elementum cursus rhoncus adipiscing. Semper sed eget dignissim.',
    image: pageImage,
    imageAlt: 'this is some alt text',
  },
  argTypes: {
    backgroundColour: selectColours,
    textColour: selectColours,
  },
  render: (args) => <Hero {...args} />,
}
