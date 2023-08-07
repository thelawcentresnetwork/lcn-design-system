import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Embed from './Embed'
import { EmbedProps } from './Embed'

const meta: Meta<typeof Embed> = {
  title: 'Components/Embed',
}
export default meta
type Story = StoryObj<typeof Embed>

export const Default: Story = {
  render: (args: EmbedProps) => (
    <Embed
      {...args}
      code='<div style="position: relative; padding-bottom: 44.53125%; height: 0;"><iframe src="https://player.vimeo.com/video/546026506?h=3bd0452640" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></div>'
    />
  ),
}
