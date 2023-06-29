import { Button } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [
        { name: 'white', value: '#fff' },
        { name: 'grey', value: '#7A7D84' },
      ],
    },
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
    size: {
      options: ['long', 'short'],
      control: { type: 'radio' },
    },
    colorScheme: {
      options: ['brand.warmYellow', 'brand.brightBlue', 'brand.white'],
      control: { type: 'radio' },
    },
  },
}
export default meta
type Story = StoryObj<typeof Button>
export const Solid: Story = {
  args: {
    variant: 'solid',
    size: 'long',
    colorScheme: 'brand.warmYellow',
  },
  render: (args) => <Button {...args}>Button</Button>,
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'long',
    colorScheme: 'brand.warmYellow',
  },
  render: (args) => (
    <Button variant="outline" {...args}>
      Button
    </Button>
  ),
}
