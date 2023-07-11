import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Results from './Results'

const meta: Meta<typeof Results> = {
  title: 'Patterns/Get Help/Results',
}

export default meta

type Story = StoryObj<typeof Results>

export const ResultsPanel: Story = {
  render: () => <Results />,
}
