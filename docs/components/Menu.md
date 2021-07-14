Full documentation and props can be found in the [Chakra Documentation](https://chakra-ui.com/docs/overlay/menu)

```jsx

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider
} from "@chakra-ui/react";

<Menu >
  <MenuButton as={Button} rightIcon={<ChakraAwesome icon="chevron-down" />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuGroup title="Profile">
      <MenuItem icon={<ChakraAwesome icon="download" />}>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
```