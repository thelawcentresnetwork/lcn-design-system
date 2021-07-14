We use [FontAwesome](https://fontawesome.com/v6.0/docs/web/setup/quick-start) to provide accessible, scalable, and customisable icons for our projects. 

You can experiment with icons, colors, sizes, [and more](https://fontawesome.com/v6.0/docs/web/style/styling):

```jsx
import ChakraAwesome from '../../src/utilities/ChakraAwesome';
import { HStack } from "@chakra-ui/react";
<HStack spacing="5">
  <ChakraAwesome icon={['fas', 'heart']} color="brand.Red" size="2x"  />
  <ChakraAwesome icon={['fak', 'lcnpetal']} color="brand.Orange" size="2x"  />
</HStack>
```