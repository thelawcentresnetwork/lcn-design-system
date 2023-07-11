import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Search from './Search'

const meta: Meta<typeof Search> = {
  title: 'Patterns/Get Help/Search',
}

export default meta

type Story = StoryObj<typeof Search>

export const SearchPanel: Story = {
  render: () => <Search />,
}
