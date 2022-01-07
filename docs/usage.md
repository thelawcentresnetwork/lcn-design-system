## No-code in Framer

Non-technical users can import this design system for use in their Framer projects. More information in the [Framer documention](https://www.framer.com/support/using-framer/npm-packages/).

## Using in your React application

Set up Chakra UI using the latest [installation guide](https://chakra-ui.com/guides/getting-started/nextjs-guide).

Then grab the system from [NPM](https://www.npmjs.com/package/law-centres-design-system)

```bash static
npm install law-centres-design-system
```

... and install dependancies.

Then setup the Chakra provider using the LCN theme:

```js static
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "law-centres-design-system";

<ChakraProvider theme={Theme}>

  // Your App Here

</ChakraProvider>
```