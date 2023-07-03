import { Meta } from '@storybook/react'
import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Box,
} from '@chakra-ui/react'

export default {
  component: Menu,
  argTypes: {
    menuButton: {
      description: 'The content of the menu button',
      control: {
        type: 'text',
      },
    },
    menuItem1: {
      description: 'The content of the first menu item',
      control: {
        type: 'text',
      },
    },
    menuItem2: {
      description: 'The content of the second menu item',
      control: {
        type: 'text',
      },
    },
    menuItem3: {
      description: 'The content of the third menu item',
      control: {
        type: 'text',
      },
    },
  },
} as Meta

interface MenuComponentProps {
  menuButton: string
  menuItem1: string
  menuItem2: string
  menuItem3: string
}

export const MenuComponent: React.FC<MenuComponentProps> = ({
  menuButton,
  menuItem1,
  menuItem2,
  menuItem3,
}) => (
  <Box display="flex" justifyContent="center" alignItems="center" width="100%">
    <Menu>
      <MenuButton>{menuButton || 'Actions'}</MenuButton>
      <Box display="flex" justifyContent="center">
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>{menuItem1 || 'Download'}</MenuItem>
            <MenuItem>{menuItem2 || 'Create a Copy'}</MenuItem>
            <MenuItem>{menuItem3 || 'Mark as Draft'}</MenuItem>
          </MenuGroup>
        </MenuList>
      </Box>
    </Menu>
  </Box>
)
