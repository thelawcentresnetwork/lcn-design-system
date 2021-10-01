import React, { useEffect } from 'react'

import { useForm, FormProvider, useFieldArray } from "react-hook-form";

import {
    Button,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Table,
    Tr,
    Th,
    Thead,
    Tbody,
    Box,
} from "@chakra-ui/react"

import Field from './Field'

import ChakraAwesome from '../../utilities/ChakraAwesome';
import DActions from '../../components/DynamicForm/Actions';

const fieldTypes = [
    {
        value: 'string',
        label: 'Short Text'
    },
    {
        value: 'text',
        label: 'Long text'
    },
    {
        value: 'integer',
        label: 'Number'
    },
    {
        value: 'array',
        label: 'Dropdown'
    },
    {
        value: 'boolean',
        label: 'Checkbox'
    },
    {
        value: 'date',
        label: 'Date'
    }
]

export default function FormBuilder({ schema, onClose, isOpen, onSave }) {

    const formMethods = useForm();
    const { reset, formState: { errors } } = formMethods

    const {
        fields: fields,
        swap: swapField,
        append: appendField,
        remove: removeField } = useFieldArray({
            control: formMethods.control,
            name: "fields"
        });

    useEffect(() => {

        if (schema?.properties && isOpen) {

            const schemaFields = schema?.properties?.map((field, index) => {
                return {
                    name: field.name,
                    id: index,
                    label: field.label,
                    type: fieldTypes.find(c => c.value === field.type),
                    items: field.items,
                    ppi: field.ppi,
                    required: field.validation?.hasOwnProperty('required')
                }
            })

            reset({ fields: schemaFields })

        }

    }, [isOpen])

    const onSubmit = (values) => {

        let newSchema = schema
        newSchema.properties = []

        values.fields.forEach((field, index) => {

            let newField = {
                name: field.label,
                label: field.label,
                type: field.type?.value,
                ppi: field.ppi,
                items: field.items
            }

            if (field.required) {
                newField['validation'] = { required: true }
            }

            newSchema.properties.push(newField)

        })

        onSave(newSchema)

    }

    return (

        <>

            <Modal size='4xl' isOpen={isOpen} onClose={onClose}>

                <ModalOverlay />
                {schema &&
                    <ModalContent mt="10" p="5">
                        <ModalHeader>
                            Customise {schema.title}
                            <ModalCloseButton />
                        </ModalHeader>

                        <FormProvider {...formMethods}>
                            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                                <ModalBody pb="5" px="0" mt="-8">
                                    <Stack spacing="5">

                                        {fields &&
                                            <Table variant="simple">
                                                <Thead>
                                                    <Tr>
                                                        <Th borderBottom="0"></Th>
                                                        <Th borderBottom="0"></Th>
                                                        <Th borderBottom="0"></Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>

                                                    {
                                                        fields.map((field, index) => (
                                                            <Field
                                                                fieldTypes={fieldTypes}
                                                                key={field.id}
                                                                index={index}
                                                                total={fields.length}
                                                                field={field}
                                                                swapField={swapField}
                                                                removeField={removeField} />
                                                        ))
                                                    }

                                                </Tbody>
                                            </Table>
                                        }

                                        <Button
                                            variant="inverse"
                                            leftIcon={<ChakraAwesome icon="plus" />}
                                            onClick={e => appendField({ type: "text" })}>Add field</Button>

                                    </Stack>
                                </ModalBody>

                                <ModalFooter
                                    mt="0"
                                    borderTopWidth="1px"
                                    borderColor='gray.100'
                                    pt="7"
                                    justifyContent="flex-start">
                                    <DActions
                                        labels={{
                                            submit: 'Save Form',
                                            cancel: 'Cancel'
                                        }}
                                        onCancel={onClose} />
                                </ModalFooter>

                            </form>
                        </FormProvider>

                    </ModalContent>
                }
            </Modal>
        </>
    )

}