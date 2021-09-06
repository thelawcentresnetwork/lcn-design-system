We use [React Hook Form](https://react-hook-form.com/) to handle all validation and state management. See an [example](https://chakra-ui.com/guides/integrations/with-hook-form) from Chakra.

```jsx

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormErrorIcon,
  FormHelperText,
  Input,
  Checkbox,
  InputLeftAddon,
  InputGroup
} from "@chakra-ui/react";

<VStack spacing="7" p="5">
  <FormControl id="email" isInvalid>
    <FormLabel>Email address</FormLabel>
    <Input type="email" />
      <FormErrorMessage  >
        <FormErrorIcon icon={<ChakraAwesome icon={['fas', 'circle-exclamation']} />} />
        Please enter a valid email address
      </FormErrorMessage>
  </FormControl>
  <FormControl id="phone" >
    <FormLabel>Phone number</FormLabel>
    <InputGroup>
      <InputLeftAddon children="+44" />
      <Input type="tel" placeholder="Phone number" />
    </InputGroup>
    <FormHelperText>We'll never share phone number.</FormHelperText>      
  </FormControl>
  <FormControl id="terms">
    <Checkbox colorScheme="green" defaultIsChecked>Agree to terms</Checkbox>
  </FormControl>
  <HStack w="100%" spacing="5">
    <Button>Submit</Button>
    <Button variant="outline" colorScheme="gray">Cancel</Button>
  </HStack>
</VStack>

```

Dynamic forms can be used alongside React Hook Form for the sake of brevity, or utilised when creating forms from JSON schemas. These inputs also [accept all props](https://chakra-ui.com/docs/form/input) from standard Chakra inputs.

We also utilise [React Select](https://react-select.com/) and [DateRangePicker](https://github.com/hypeserver/react-date-range) for fancy select and date / time pickers.

```jsx

import { useForm, FormProvider } from "react-hook-form";

import exampleSchema from "../helpers/exampleSchema";

import DInput from "../../src/components/DynamicForm/Input";
import DTextarea from "../../src/components/DynamicForm/Textarea";
import DCheckbox from "../../src/components/DynamicForm/Checkbox";
import DRadio from "../../src/components/DynamicForm/Radio";
import DSelect from "../../src/components/DynamicForm/Select";
import DActions from "../../src/components/DynamicForm/Actions";
import DFormSchema from "../../src/components/DynamicForm/FormSchema";

import { Stack, Box } from "@chakra-ui/react";

const ShortForm = () => {

  const { ...methods } = useForm();

  const onSubmit = (values) => {
    console.log(values)
  }

   const onCancel = (e) => {
    console.log('Cancelled')
  }
  
  return (
    <FormProvider {...methods}>

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DFormSchema schema={exampleSchema} />
        <Box py="5">
          <DActions onCancel={onCancel}/>
        </Box>
      </form>
      
    </FormProvider>
  )

}

<ShortForm />


```