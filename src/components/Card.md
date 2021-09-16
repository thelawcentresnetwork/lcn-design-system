```js 
  import { Heading, Text, Spacer, SimpleGrid, Box } from '@chakra-ui/react';
  <SimpleGrid columns={2} spacing="5">
    <Card 
      title="Title of this card"
      link="http://google.com"
      image="http://images.ctfassets.net/zz4093a0xiy6/2fUTCGDeYE8TFbou5tGutp/d7719dbb672450f75112f4928160e729/hero">
      
      <Box>
        <Text>Any other content can be included here.</Text>
        <Text>Any other content can be included here.</Text>
        <Text>Any other content can be included here.</Text>
        <Text>Any other content can be included here.</Text>
      </Box>

      <Spacer />

      <Text>Something in the footer</Text>

    </Card>
    <Card 
      title="Title of this card"
      link="http://google.com"
      image="https://images.unsplash.com/photo-1604881991664-593b31b88488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80">
      <Text>Any other content can be included here.</Text>
      <Spacer />
      <Text>Something in the footer</Text>
    </Card>
  </SimpleGrid>
```