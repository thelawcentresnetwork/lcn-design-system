We use [Poppins](https://fonts.google.com/specimen/Poppins) for Headings and [Lato](https://fonts.google.com/specimen/Lato) for body text. Both can be used for free from [Google Fonts](https://fonts.google.com/).

Further typography options can be found in [Chakra Documentation](https://chakra-ui.com/docs/typography/text)
 
```js
  import { VStack, Heading } from "@chakra-ui/react";
  <VStack align="left">
    <Heading as="h1" variant="h1">Heading 1</Heading>
    <Heading as="h2" variant="h2">Heading 2</Heading>
    <Heading as="h3" variant="h3">Heading 3</Heading>
    <Heading as="h4" variant="h4">Heading 4</Heading>
  </VStack>
```

##### Core body text

```js
  import { Text } from "@chakra-ui/react";
  <Text>Body copy, morbi egestas leo fringilla, molestie ipsum et, pulvinar ligula. Mauris eu risus faucibus, ultricies eros at, iaculis est. Cras ut justo porta enim cursus efficitur. Donec vitae scelerisque magna. Integer semper sem tortor, eget consectetur turpis finibus non.</Text>
    
```

#####  Muted text, hints, etc

```js
  import { Text } from "@chakra-ui/react";
  <Text variant="muted">Muted, pellentesque habitant morbi tristique senectus.</Text>
```