Full documentation and props from https://chakra-ui.com/docs/form/button


```js padded
import ChakraAwesome from '../utilities/ChakraAwesome';
import { HStack } from "@chakra-ui/react";
<HStack spacing="5">
  <Button variant="solid">
    Solid Button
  </Button>
  <Button leftIcon={<ChakraAwesome icon={['fas','user']} />} variant="solid">
    Button with icon
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
</HStack>
```

Each variant style can have a color scheme applied. See [color reference](#/Styles?id=section-colour).

```js padded
<Button colorScheme="orange" variant="solid">
  Button
</Button>
<Button colorScheme="gray" variant="outline">
  Button
</Button>
<Button colorScheme="blue" variant="brand">
  Brand Button
</Button>
<Button colorScheme="red" variant="link">
  Button
</Button>
```
