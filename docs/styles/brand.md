``` jsx
import { Image, Box } from '@chakra-ui/react';
<VStack spacing="10" py="10">
  <Image 
    width="150px"
    src="/logos/logo-brand.gif" />
  <Box bg="brand.Green" p="10">
    <Image 
      width="100px"
      src="/logos/logo-brand-white.gif" />
  </Box>
  <Image 
    width="200px"
    src="/logos/logo-lcn-dark.gif" />
  <Box bg="black" p="10">
    <Image 
      width="200px"
      src="/logos/logo-lcn-white.gif" />
  </Box>
  <Box bg="brand.Green" p="10">
    <Image 
      width="200px"
      src="/logos/logo-lcn-full-white.gif" />
  </Box>
</VStack>
```