```js noeditor inside
import Theme from '../../src/theme';
import { SimpleGrid, Heading } from "@chakra-ui/react";
import ColorDescription from '../helpers/ColorDescription';
<>
  <SimpleGrid columns={[1, null, 4]} spacing="10" pt="5" mb="7">
    { Theme.colors.brand &&
      Object.keys(Theme.colors.brand).map(function(keyName, keyIndex) {
        return (<ColorDescription
          key={keyIndex}
          color={Theme.colors.brand[keyName]}
          name={ keyName.toString().charAt(0).toUpperCase() + keyName.toString().slice(1) }
        />)
      })
    }
  </SimpleGrid>
      
  <SimpleGrid columns={[1, null, 4]} spacing="10" py='7'>
    { Theme.colors.green &&
      Object.keys(Theme.colors.green).map(function(keyName, keyIndex) {
        return (<ColorDescription
          color={Theme.colors.green[keyName]}
          name={ "Green "+keyName.toString() }
        />)
      })
    }
  </SimpleGrid>
  <SimpleGrid columns={[1, null, 4]} spacing="10" py='7'>
    { Theme.colors.red &&
      Object.keys(Theme.colors.red).map(function(keyName, keyIndex) {
        return (<ColorDescription
          color={Theme.colors.red[keyName]}
          name={ "Red "+keyName.toString() }
        />)
      })
    }
  </SimpleGrid>
  <SimpleGrid columns={[1, null, 4]} spacing="10" py='7'>
    { Theme.colors.blue &&
      Object.keys(Theme.colors.blue).map(function(keyName, keyIndex) {
        return (<ColorDescription
          color={Theme.colors.blue[keyName]}
          name={ "Blue "+keyName.toString() }
        />)
      })
    }
  </SimpleGrid>
  <SimpleGrid columns={[1, null, 4]} spacing="10" py='7'>
    { Theme.colors.orange &&
      Object.keys(Theme.colors.orange).map(function(keyName, keyIndex) {
        return (<ColorDescription
          color={Theme.colors.orange[keyName]}
          name={ "Orange "+keyName.toString() }
        />)
      })
    }
  </SimpleGrid>

  <SimpleGrid columns={[1, null, 4]} spacing="10" py='7'>
    { Theme.colors.gray &&
      Object.keys(Theme.colors.gray).map(function(keyName, keyIndex) {
        return (<ColorDescription
          color={Theme.colors.gray[keyName]}
          name={ "Gray "+keyName.toString() }
        />)
      })
    }
  </SimpleGrid>
</>
```