import React from 'react'
import { selectColours } from '../Colours/selectColours'
import { StoryObj, Meta } from '@storybook/react'
import Callout, { CalloutProps } from './Callout'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components/Callout',

  argTypes: {
    bg: selectColours,
    text: {
      control: {
        type: 'text',
      },
    },

    color: selectColours,

    type: {
      description: 'This can be : default, short or long',
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const DefaultCallout: StoryObj<CalloutProps> = (args: CalloutProps) => (
  <Callout {...args}>
    Law Centres provide their services free of charge because money should never
    be a barrier to justice.{' '}
  </Callout>
)
DefaultCallout.args = {
  bg: 'brand.legacyBlue',
  color: 'white',
  type: 'default',
}

export const ShortCallout: StoryObj<CalloutProps> = (args: CalloutProps) => (
  <Callout {...args}>
    Law Centres’ collective identity and shared values have always been strong.
    Working together means Law Centres can do more of what they do best.{' '}
  </Callout>
)
ShortCallout.args = {
  bg: 'brand.legacyBlue',
  color: 'white',
  type: 'short',
}

export const LongCallout: StoryObj<CalloutProps> = (args: CalloutProps) => (
  <Callout {...args}>
    <Box>
      “In Liverpool, the list of those who are homeless or threatened with
      homelessness is rapidly increasing. When private renters face eviction now
      they are not able to afford to pay the rents being asked for in other
      private rented properties and are forced to rely on the local authority
      and social housing sector. There are not enough temporary accommodation
      spaces available, leading to people being placed far outside the area they
      live for the first time… A national rent freeze and eviction ban are
      imperative to stop these problems growing further.”
    </Box>
  </Callout>
)
LongCallout.args = {
  bg: 'brand.legacyBlue',
  color: 'white',
  type: 'default',
}
