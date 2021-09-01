```js padded
    import { Box } from '@chakra-ui/react';
    <Box bg="gray.50" p="10">
        <Quote
            maxW="75%"
            quote="Sed sed risus pretium quam vulputate dignissim. Ornare quam viverra orci sagittis. Integer vitae justo eget magna fermentum iaculis eu non diam"
            citation='Emily MacLoud'
            icon={<ChakraAwesome color="brand.Green" size="3x" icon={['fas', 'quote-left']} />}
            citationTitle='Law Centres Network'
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2198&q=80"
            />
    </Box>
```

Using dark context props to flip some colours:

```js padded
    import { Box } from '@chakra-ui/react';
    <Box bg="blue.500" p="10">
        <Quote
            context="dark"
            maxW="75%"
            quote="Sed sed risus pretium quam vulputate dignissim. Ornare quam viverra orci sagittis. Integer vitae justo eget magna fermentum iaculis eu non diam"
            citation='Emily MacLoud'
            icon={<ChakraAwesome color="brand.Green" size="3x" icon={['fas', 'quote-left']} />}
            citationTitle='Law Centres Network'
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2198&q=80"
            />
    </Box>
```