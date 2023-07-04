import { Button, Box } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { IconArrowRight } from '../../atoms/Icons/Icons'

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
      options: ['solid', 'outline', 'icon'],
      control: { type: 'radio' },
    },
    size: {
      options: ['long', 'short', 'icon'],
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

export const ButtonWithIcon: Story = {
  args: {
    variant: 'solid',
    size: 'long',
    colorScheme: 'brand.white',
  },
  render: (args) => (
    <Button leftIcon={<IconArrowRight />} {...args}>
      <Box flexGrow={1}>Button with icon</Box>
    </Button>
  ),
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    size: 'icon',
    colorScheme: 'brand.warmYellow',
  },
  render: (args) => (
    <Button {...args}>
      <FaTwitter />
    </Button>
  ),
}
