Full documentation and props can be found in the [Chakra Documentation](https://chakra-ui.com/docs/disclosure/tabs#props)

```jsx
import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel
 } from "@chakra-ui/react";

 <Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

```