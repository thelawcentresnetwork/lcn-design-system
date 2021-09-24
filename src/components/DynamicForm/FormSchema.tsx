import React from 'react'
import { UseFormReturn } from "react-hook-form";

import {
    Stack
} from '@chakra-ui/react'

import DInput from "./Input";
import DTextarea from "./Textarea";
import DCheckbox from "./Checkbox";
import DRadio from "./Radio";
import DSelect from "./Select";
import DDate from "./Date";
//@ts-ignore
import DFile from "./File";

interface DFormProps {
    useForm: UseFormReturn,
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

export default function DFormSchema({ schema, useForm }: DFormProps) {

    const FormField = ({ input }: DFormFieldProps) => {
        let field = schema.properties[input]
        switch (field.type) {
            case "string":
                return (
                    <DInput
                        useForm={useForm}
                        placeholder={field.placeholder}
                        hint={field.hint}
                        name={input}
                        label={field.label} />
                )
            case "integer":
                return (
                    <DInput
                        useForm={useForm}
                        placeholder={field.placeholder}
                        hint={field.hint}
                        name={input}
                        label={field.label} />
                )
            case "date":
                return (
                    <DDate
                        useForm={useForm}
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
                                useForm={useForm}
                                type='switch'
                                name={input}
                                hint={field.hint}
                                label={field.label} />
                        }
                        {
                            !field.ui &&
                            <DCheckbox
                                useForm={useForm}
                                name={input}
                                hint={field.hint}
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
                                useForm={useForm}
                                options={field.items}
                                name={input}
                                hint={field.hint}
                                label={field.label} />
                        }
                        {
                            !field.ui &&
                            <DSelect
                                useForm={useForm}
                                options={field.items}
                                name={input}
                                hint={field.hint}
                                label={field.label} />
                        }
                    </>
                )
            case "text":
                return (
                    <DTextarea
                        rows={field.rows}
                        useForm={useForm}
                        hint={field.hint}
                        placeholder={field.placeholder}
                        name={input}
                        label={field.label} />
                )
            case "file":
                return (
                    <DFile
                        useForm={useForm}
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
                <Stack spacing="6">

                    {Object.keys(schema.properties).map((input, idx) => (
                        <FormField key={idx} input={input} />
                    ))}

                </Stack>
            }
        </>
    )

}