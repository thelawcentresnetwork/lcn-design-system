import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  component: Logo,
  argTypes: {
    variant: {
      options: ['colour', 'white'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Colour: Story = {
  args: {
    variant: 'colour',
  },
}
