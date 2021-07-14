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

Buttons can be extended:

```js
import { ButtonGroup, IconButton } from "@chakra-ui/react";
<HStack spacing="4">
  <Button leftIcon={<ChakraAwesome icon={['fas','user']} />} variant="solid">
    Button with icon
  </Button>
   <Button isLoading loadingText="Loading Button" variant="solid">
    Loading Button
  </Button>
  <ButtonGroup isAttached variant="outline" colorScheme="gray">
    <Button mr="-px">Action Button</Button>
    <IconButton aria-label="Save" icon={<ChakraAwesome icon={['fas','plus']} />} />
  </ButtonGroup>
</HStack>
```

Each variant style can have a color scheme applied. See [color reference](#/Styles?id=section-colour)

```js padded
<VStack spacing="7" py="4">
  <Button colorScheme="red" variant="solid">
    Warning Button
  </Button>
  <Button colorScheme="blue" variant="brand">
    Brand Button
  </Button>
  <Button colorScheme="gray" variant="outline">
    Muted Button
  </Button>
</VStack>
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
