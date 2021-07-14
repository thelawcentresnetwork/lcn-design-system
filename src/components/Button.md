Full documentation and props can be found in the [Chakra Documentation](https://chakra-ui.com/docs/form/button)


```js padded
<Button variant="solid">
  Solid Button
</Button>
<Button variant="outline">
  Outlined Button
</Button>
<Button variant="brand">
  Brand Button
</Button>
<Button variant="link">
  Link Button
</Button>
```

Buttons can be extended

```js
import ChakraAwesome from '../utilities/ChakraAwesome';
import { HStack, ButtonGroup, IconButton } from "@chakra-ui/react";
<HStack spacing="4">
  <Button leftIcon={<ChakraAwesome icon={['fas','user']} />} variant="solid">
    Button with icon
  </Button>
   <Button isLoading loadingText="Loading Button" variant="solid">
    Loading Button
  </Button>
  <ButtonGroup isAttached variant="outline">
    <Button mr="-px">Save</Button>
    <IconButton aria-label="Add to friends" icon={<ChakraAwesome icon={['fas','plus']} />} />
  </ButtonGroup>
</HStack>
```

Each variant style can have a color scheme applied. See [color reference](#/Styles?id=section-colour)

```js padded
<Button colorScheme="blue" variant="solid">
  Button
</Button>
<Button colorScheme="orange" variant="brand">
  Brand Button
</Button>
<Button colorScheme="gray" variant="outline">
  Button
</Button>
<Button colorScheme="red" variant="link">
  Button
</Button>
```

Buttons can also be sized:

```js padded
<Button size="xs">
  Button
</Button>
<Button size="sm">
  Button
</Button>
<Button size="md">
  Button
</Button>
<Button size="lg">
  Button
</Button>
```
