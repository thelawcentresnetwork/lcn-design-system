import React from 'react'
import { UseFormReturn } from "react-hook-form";

import {
    Stack
} from '@chakra-ui/react'

import DInput from "./Input";
import DNumber from "./Number";
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
        let { validation, type, items, ui, ...inputProps } = field
        switch (type) {
            case "string":
                return (
                    <DInput
                        useForm={useForm}
                        name={input}
                        validation={validation}
                        {...inputProps} />
                )
            case "integer":
                return (
                    <DNumber
                        name={input}
                        useForm={useForm}
                        validation={validation}
                        {...inputProps} />
                )
            case "date":
                return (
                    <DDate
                        useForm={useForm}
                        name={input}
                        validation={validation}
                        {...inputProps} />
                )
            case "boolean":
                return (
                    <>
                        {
                            ui == "switch" &&
                            <DCheckbox
                                useForm={useForm}
                                type='switch'
                                name={input}
                                validation={validation}
                                {...inputProps} />
                        }
                        {
                            !ui &&
                            <DCheckbox
                                useForm={useForm}
                                name={input}
                                validation={validation}
                                {...inputProps} />
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
                                options={items}
                                name={input}
                                validation={validation}
                                {...inputProps} />
                        }
                        {
                            !field.ui &&
                            <DSelect
                                useForm={useForm}
                                options={items}
                                name={input}
                                validation={validation}
                                {...inputProps} />
                        }
                    </>
                )
            case "text":
                return (
                    <DTextarea
                        useForm={useForm}
                        name={input}
                        validation={validation}
                        {...inputProps} />
                )
            case "file":
                return (
                    <DFile
                        useForm={useForm}
                        name={input}
                        validation={validation}
                        {...inputProps} />
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