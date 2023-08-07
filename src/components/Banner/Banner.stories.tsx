import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Banner from './Banner'
import { BannerProps } from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
}
export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: (args: BannerProps) => (
    <Banner
      {...args}
      mb="5"
      text="This is an alert with a basic call to action"
      link="/"
      linkText="Support"
    />
  ),
}

export const Alert: Story = {
  render: (args: BannerProps) => (
    <Banner
      {...args}
      mb="5"
      type="alert"
      text="This is an alert with a basic call to action"
      link="/"
      linkText="Support"
    />
  ),
}
