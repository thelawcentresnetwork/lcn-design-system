import { Input, FormControl, FormLabel } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Input> = {
  title: 'components/Forms/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#fff' },
        { name: 'brightTeal', value: '#4CDED7' },
      ],
    },
  },
}
export default meta
type Story = StoryObj<typeof Input>
export const Default: Story = {
  parameters: {
    backgrounds: { default: 'brightTeal' },
  },
  render: (args) => (
    <FormControl>
      <FormLabel>Your email</FormLabel>
      <Input {...args} type="email" />
    </FormControl>
  ),
}

export const Outline: Story = {
  parameters: {
    backgrounds: { default: 'brightTeal' },
  },
  render: (args) => (
    <FormControl>
      <FormLabel>Your email</FormLabel>
      <Input {...args} type="email" variant="outline" />
    </FormControl>
  ),
}
