import React, { useEffect } from "react";
import parameterize from "parameterize-js";

import { useForm, FormProvider, useFieldArray } from "react-hook-form";

import {
  Button,
  Stack,
  Heading,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Box,
} from "@chakra-ui/react";

import Field from "./Field";

import ChakraAwesome from "../../utilities/ChakraAwesome";
import DActions from "../../components/DynamicForm/Actions";

const fieldTypes = [
  {
    value: "string",
    label: "Short Text",
  },
  {
    value: "text",
    label: "Long text",
  },
  {
    value: "integer",
    label: "Number",
  },
  {
    value: "array",
    label: "Dropdown",
  },
  {
    value: "boolean",
    label: "Checkbox",
  },
  {
    value: "date",
    label: "Date",
  },
];

export default function FormBuilder({ schema, onCancel, onSave, labels }) {
  const formMethods = useForm();
  const {
    reset,
    formState: { errors },
  } = formMethods;

  const {
    fields: fields,
    swap: swapField,
    append: appendField,
    remove: removeField,
  } = useFieldArray({
    control: formMethods.control,
    name: "fields",
  });

  useEffect(() => {
    if (schema?.properties) {
      const schemaFields = schema?.properties?.map((field, index) => {
        return {
          name: field.name,
          id: index,
          label: field.label,
          type: field.type,
          items: field.items?.map((item) => item.value),
          ppi: field.ppi,
          required: field.validation?.hasOwnProperty("required"),
        };
      });

      reset({ fields: schemaFields });
    }
  }, [schema]);

  const onSubmit = (values) => {
    let newSchema = schema;
    newSchema.properties = [];

    values.fields.forEach((field, index) => {
      let newField = {
        //name: parameterize(field.label),
        name: field.label?.replaceAll("'", "")?.replaceAll(".", ""),
        label: field.label,
        type: field.type,
        ppi: field.ppi,
        items: field.items?.map((item) => ({ value: item, label: item })),
      };

      if (field.required) {
        newField["validation"] = { required: "Please fill in this field." };
      }

      newSchema.properties.push(newField);
    });

    onSave(newSchema);
  };

  return (
    <>
      {schema && (
        <>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
              <Box pb="5" px="0" mt="-8">
                <Stack spacing="5">
                  {fields && (
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th borderBottom="0"></Th>
                          <Th borderBottom="0"></Th>
                          <Th borderBottom="0"></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {fields.map((field, index) => (
                          <Field
                            fieldTypes={fieldTypes}
                            key={field.id}
                            index={index}
                            total={fields.length}
                            field={field}
                            swapField={swapField}
                            removeField={removeField}
                          />
                        ))}
                      </Tbody>
                    </Table>
                  )}

                  <Button
                    variant="inverse"
                    leftIcon={<ChakraAwesome icon="plus" />}
                    onClick={(e) => appendField({ type: "string" })}
                  >
                    Add field
                  </Button>
                </Stack>
              </Box>

              <Box pt="3" justifyContent="flex-start">
                <DActions
                  labels={
                    labels || {
                      submit: "Save Form",
                      cancel: "Cancel",
                    }
                  }
                  onCancel={onCancel}
                />
              </Box>
            </form>
          </FormProvider>
        </>
      )}
    </>
  );
}
