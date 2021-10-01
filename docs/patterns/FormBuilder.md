

```js padded
    import { useState } from 'react';
    import { useForm } from "react-hook-form";
    import { Button, useDisclosure, Code, Box, Heading } from "@chakra-ui/react";
    import FormBuilder from '/src/patterns/FormBuilder/FormBuilder';
    import exampleSchema from "../helpers/exampleBuilderSchema";
    import DFormSchema from "../../src/components/DynamicForm/FormSchema";

    const methods = useForm();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [data, setData] = useState();

    const onCancel = (e) => {
        setData({})
    }

    const onSave = (schema) => {
        setData(schema)
        onClose()
    }

    <>
        <Button onClick={onOpen}>
            Create an example form
        </Button>
        <Box>
            <FormBuilder 
                onSave={onSave}
                schema={exampleSchema}
                onClose={onClose}
                isOpen={isOpen} />
        </Box>

        {data && 
            <>
                <Heading size="md" my="5">Your form</Heading>
                <DFormSchema useForm={methods} schema={data} />
            </>
        }

        <Heading mt="5" size="md">JSON Schema</Heading>
        <Code mt="5">
            <pre>{JSON.stringify(data, null, 2) || JSON.stringify({}, null, 2) }</pre>
        </Code>
        
    </>
```