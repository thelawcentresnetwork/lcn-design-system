```js 
  import { Heading, Text, Spacer, SimpleGrid, Box } from '@chakra-ui/react';
  <>
    <SimpleGrid columns={2} spacing="5">
      <Card 
        title="Title of this card"
        link="http://google.com"
        image="http://images.ctfassets.net/zz4093a0xiy6/2fUTCGDeYE8TFbou5tGutp/d7719dbb672450f75112f4928160e729/hero">
        
        <Box>
          <Text>Any other content can be included here.</Text>
        </Box>

        <Spacer />

        <Text>Something in the footer</Text>

      </Card>
    </SimpleGrid>

    <SimpleGrid mt="10" columns={2} spacing="10">
      <Card 
        collapsable={true}
        title="This card collapses">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      </Card>
      <Card 
        collapsable={true}
        title="So does this card">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      </Card>
    </SimpleGrid>
  </>
```