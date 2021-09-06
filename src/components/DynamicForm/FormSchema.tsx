import React from 'react'

import {
    Stack
} from '@chakra-ui/react'

import DInput from "./Input";
import DTextarea from "./Textarea";
import DCheckbox from "./Checkbox";
import DRadio from "./Radio";
import DSelect from "./Select";
import DDate from "./Date";

interface DFormProps {
    schema: {
        properties: {
            type: string,
            label: string,
            options?: [],
            hint?: string,
            placeholder?: string
        }
    }
}

interface DFormFieldProps {
    input: string
}

export default function DFormSchema({ schema }: DFormProps) {

    const FormField = ({ input }: DFormFieldProps) => {
        let field = schema.properties[input]
        switch (field.type) {
            case "string":
                return (
                    <DInput
                        placeholder={field.placeholder}
                        hint={field.hint}
                        name={input}
                        label={field.label} />
                )
            case "integer":
                return (
                    <DInput
                        placeholder={field.placeholder}
                        hint={field.hint}
                        name={input}
                        label={field.label} />
                )
            case "date":
                return (
                    <DDate
                        placeholder={field.placeholder}
                        hint={field.hint}
                        name={input}
                        label={field.label} />
                )
            case "boolean":
                return (
                    <>
                        {
                            field.ui == "switch" &&
                            <DCheckbox
                                type='switch'
                                name={input}
                                label={field.label} />
                        }
                        {
                            !field.ui &&
                            <DCheckbox
                                name={input}
                                label={field.label} />
                        }
                    </>
                )

            case "array":
                return (
                    <>
                        {
                            field.ui == "radio" &&
                            <DRadio
                                options={field.items}
                                name={input}
                                label={field.label} />
                        }
                        {
                            !field.ui &&
                            <DSelect
                                options={field.items}
                                name={input}
                                label={field.label} />
                        }
                    </>
                )
            case "text":
                return (
                    <DTextarea
                        hint={field.hint}
                        placeholder={field.placeholder}
                        name={input}
                        label={field.label} />
                )
            default:
                console.log("Can not render field: " + input);
                return (<></>);
        }
    }

    return (
        <>
            {
                schema.properties &&
                <Stack spacing="5">

                    {Object.keys(schema.properties).map((input) => (
                        <FormField input={input} />
                    ))}

                </Stack>
            }
        </>
    )

}