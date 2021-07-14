Full documentation and props can be found in the [Chakra Documentation](https://chakra-ui.com/docs/data-display/badge). 

See also: [Tags](https://chakra-ui.com/docs/data-display/tag) for more interactive badge-like functionality.

```js padded
import { Badge } from '@chakra-ui/react';
<HStack spacing="4">
  <Badge variant="solid">
    Solid
  </Badge>
  <Badge variant="outline">
    Outlined
  </Badge>
</HStack>
```

Badges also accept color schemes:

```js padded
import { Badge } from '@chakra-ui/react';
<HStack spacing="4">
  <Badge colorScheme="blue">
    Blue
  </Badge>
  <Badge colorScheme="orange">
    Orange
  </Badge>
  <Badge colorScheme="red">
    Red
  </Badge>
  <Badge colorScheme="green">
    Green 
  </Badge>
  <Badge colorScheme="gray" variant="outline">
    Gray 
  </Badge>
</HStack>
```