We use [Poppins](https://fonts.google.com/specimen/Poppins) for Headings and [Lato](https://fonts.google.com/specimen/Lato) for body text. Both can be used for free from [Google Fonts](https://fonts.google.com/).

Further typography options can be found in [Chakra Documentation](https://chakra-ui.com/docs/typography/text)

```js
  import { VStack, Heading } from "@chakra-ui/react";
  <VStack align="left">
    <Heading as="h1" size="2xl" fontWeight="900">Heading 1</Heading>
    <Heading as="h2" size="xl">Heading 2</Heading>
    <Heading as="h3" size="lg">Heading 3</Heading>
    <Heading as="h4" size="md">Heading 4</Heading>
  </VStack>
```

```js
  import { VStack, Text } from "@chakra-ui/react";
  <VStack align="left">
    <Text>Body copy</Text>
    <Text fontSize="sm" color='gray.500'>Muted</Text>
  </VStack>
```