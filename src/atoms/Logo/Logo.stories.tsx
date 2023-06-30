import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Logo } from './Logo'

import logo from '../../assets/lcn-logo.svg'
import logoWhite from '../../assets/lcn-logo-white.svg'

const meta: Meta<typeof Logo> = {
  title: 'Logos',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'mint',
      values: [
        { name: 'white', value: '#fff' },
        { name: 'mint', value: '#4CDED7' },
      ],
    },
  },
}
export default meta
type Story = StoryObj<typeof Logo>
export const Primary: Story = {
  render: () => <Logo src={logo} alt={'The Law Centres Network Logo'}></Logo>,
}

export const White: Story = {
  parameters: { background: 'grey' },
  render: () => (
    <Logo src={logoWhite} alt={'The Law Centres Network Logo'}></Logo>
  ),
}
