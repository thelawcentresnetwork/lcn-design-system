Full documentation and props can be found in the [Chakra Documentation](https://chakra-ui.com/docs/overlay/tooltip#props)

```jsx
import { Tooltip, IconButton } from "@chakra-ui/react";
<Tooltip hasArrow label="A tooltip can help explain things a little better.">
  <IconButton
    borderRadius="md"
    icon={<ChakraAwesome icon="circle-question" color="brand.Orange" />}
    variant="outline" 
    colorScheme="gray"/>
</Tooltip>
```