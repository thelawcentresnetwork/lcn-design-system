import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import LawCentreDetails from './LawCentreDetails'

const meta: Meta<typeof LawCentreDetails> = {
  title: 'Patterns/Get Help/Law Centre Details',
}

export default meta

type Story = StoryObj<typeof LawCentreDetails>

export const LawCentreDetailsPanel: Story = {
  render: () => <LawCentreDetails />,
}
