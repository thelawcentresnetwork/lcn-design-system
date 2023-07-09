import { Meta, StoryObj } from '@storybook/react'
import Hero from './Hero'
import React from 'react'
import colors from '../../../theme/foundations/colors'

const newColors = colors.brand

// Creates an array of the colour codes, setting colours with objects as values to be a string for the colour code of 500

const colorValuesArray = () => {
  Object.keys(newColors).forEach((key: string) => {
    const currentValue = newColors[key as keyof typeof newColors]
    if (typeof currentValue !== 'string') {
      newColors[key as keyof typeof newColors] = currentValue['500']
    }
  })

  return Object.values(newColors)
}

// Creates the object where they keys and values are reversed to generate labels. See these docs https://storybook.js.org/docs/react/essentials/controls

const newColourObject = Object.fromEntries(
  Object.entries(newColors).map(([key, value]) => [value, key])
)

// generates the argType for textColour and backgroundColour

const colourArgType = {
  options: colorValuesArray(),
  control: {
    type: 'select',
    labels: newColourObject,
  },
}

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
  },
  argTypes: {
    backgroundColour: colourArgType,
    textColour: colourArgType,
  },
  render: (args) => <Hero {...args} />,
}
