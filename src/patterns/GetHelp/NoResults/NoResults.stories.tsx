import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import NoResults from './NoResults'

const meta: Meta<typeof NoResults> = {
  title: 'Patterns/Get Help/No Results',
}

export default meta

type Story = StoryObj<typeof NoResults>

export const NoResultsPanel: Story = {
  render: () => <NoResults />,
}
