import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import GetHelp from './GetHelp'

const meta: Meta<typeof GetHelp> = {
  title: 'Patterns/Get Help',
}

export default meta

type Story = StoryObj<typeof GetHelp>

export const GetHelpFlow: Story = {
  render: () => <GetHelp />,
}
