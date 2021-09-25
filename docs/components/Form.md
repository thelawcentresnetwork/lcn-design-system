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

Below we use an example form schema for reference. 

You may pass validation rules to each input either directly via the `validation` prop, or from your schema. More on these rules can be found in the [documentation for React Hook Form](https://react-hook-form.com/api/useform/register).

We also utilise [React Select](https://react-select.com/) and [DateRangePicker](https://github.com/hypeserver/react-date-range) for fancy select and date / time pickers.

```jsx

import { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";

import exampleSchema from "../helpers/exampleSchema";
import DActions from "../../src/components/DynamicForm/Actions";
import DFormSchema from "../../src/components/DynamicForm/FormSchema";

import { Stack, Heading, Code } from "@chakra-ui/react";

const ShortForm = () => {

  const methods = useForm();
  const [data, setData] = useState();

  const onSubmit = (values) => {
    console.log(values)
    setData(values)
  }

  const onCancel = (e) => {
    setData({})
  }
  
  return (

      <>

        <form encType="multipart/form-data" onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing="5">
            <DFormSchema useForm={methods} schema={exampleSchema} />
            <DActions onCancel={onCancel}/>
            <Heading size="md">Data</Heading>
            <Code>
              <pre>{JSON.stringify(data, null, 2) || JSON.stringify({}, null, 2) }</pre>
            </Code>
          </Stack>
        </form>

      </>
      
  )

}

<ShortForm />


```