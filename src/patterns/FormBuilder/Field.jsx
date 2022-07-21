import React from "react";

import { useFormContext } from "react-hook-form";

import { Flex, IconButton, Box, Tr, Td, Stack } from "@chakra-ui/react";

import ChakraAwesome from "../../utilities/ChakraAwesome";
import DSelect from "../../components/DynamicForm/Select";
import DInput from "../../components/DynamicForm/Input";
import DCheckbox from "../../components/DynamicForm/Checkbox";

export default function Field({
  index,
  total,
  field,
  swapField,
  removeField,
  fieldTypes,
}) {
  const formMethods = useFormContext();

  const fieldType = formMethods.watch(`fields.${index}.type`);

  return (
    <Tr>
      <Td pt="6" pb="7" fontSize="sm">
        <Flex>
          <Box mr="5" pb="0">
            <Stack spacing="0">
              {index > 0 && (
                <Box>
                  <ChakraAwesome
                    _hover={{ color: "brand.Green" }}
                    onClick={(e) => swapField(index, index - 1)}
                    icon="caret-up"
                    fontSize="lg"
                    color="gray.200"
                    cursor="pointer"
                  />
                </Box>
              )}
              {index < total - 1 && (
                <Box>
                  <ChakraAwesome
                    _hover={{ color: "brand.Green" }}
                    onClick={(e) => swapField(index, index + 1)}
                    icon="caret-down"
                    fontSize="lg"
                    color="gray.200"
                    cursor="pointer"
                  />
                </Box>
              )}
            </Stack>
          </Box>
          <Box>
            <Stack spacing="3">
              <DInput
                useForm={formMethods}
                name={`fields.${index}.label`}
                label="Field label"
              />
              <Stack spacing="2" pt="2">
                <DCheckbox
                  type="switch"
                  labelProps={{
                    pt: "2",
                    fontWeight: 400,
                  }}
                  useForm={formMethods}
                  name={`fields.${index}.required`}
                  label="Mandatory field"
                />
                <DCheckbox
                  type="switch"
                  labelProps={{
                    pt: "2",
                    fontWeight: 400,
                  }}
                  useForm={formMethods}
                  name={`fields.${index}.ppi`}
                  label="Contains PII"
                />
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Td>
      <Td pt="6" pb="7" verticalAlign="top">
        <Stack w="15rem" spacing="5">
          <DSelect
            name={`fields.${index}.type`}
            label="Type"
            useForm={formMethods}
            options={fieldTypes}
          />

          {fieldType == "array" && (
            <DSelect
              useForm={formMethods}
              placeholder="Add options..."
              name={`fields.${index}.items`}
              isMulti={true}
              options={field.items}
              creatable={true}
            />
          )}
        </Stack>
      </Td>

      <Td pt="6" pb="7" verticalAlign="top" textAlign="right">
        <IconButton
          mt="7"
          colorScheme="red"
          variant="inverse"
          borderRadius="full"
          icon={<ChakraAwesome icon="trash-can" />}
          onClick={(e) => removeField(index)}
        />
      </Td>
    </Tr>
  );
}
