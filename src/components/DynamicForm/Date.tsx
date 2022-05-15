import React from "react";
import {
  useController,
  Controller,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
//@ts-ignore
import ChakraAwesome from "../../utilities/ChakraAwesome";
//@ts-ignore
import { Calendar } from "react-date-range";

import {
  InputProps,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  FormHelperText,
  FormErrorMessage,
  FormErrorIcon,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
  Popover,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";

interface DInputProps extends InputProps {
  name: string;
  label?: string;
  hint?: string;
  rightAddon?: string;
  leftAddon?: string;
  validation?: RegisterOptions;
  useForm?: UseFormReturn;
}

export default function DDate({
  name,
  label,
  type,
  hint,
  leftAddon,
  rightAddon,
  colorScheme,
  useForm,
  validation,
  ...inputProps
}: DInputProps) {
  const value = useForm?.getValues(name);
  return (
    <FormControl isInvalid={useForm?.formState.errors[name] || false}>
      {label && <FormLabel>{label}</FormLabel>}

      <Controller
        control={useForm?.control}
        name={name}
        rules={validation}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <InputGroup colorScheme={colorScheme}>
            {!value && (
              <InputLeftAddon
                children={
                  <ChakraAwesome fixedWidth icon={["fal", "calendar-days"]} />
                }
              />
            )}
            {value && (
              <InputLeftAddon
                cursor="pointer"
                bg="white"
                _hover={{
                  bg: "brand.Red",
                  color: "white",
                  borderColor: "brand.Red",
                }}
                onClick={() => {
                  onChange("");
                }}
                color="red.500"
              >
                <ChakraAwesome fixedWidth icon={["fa", "circle-xmark"]} />
              </InputLeftAddon>
            )}

            <Popover placement="right">
              <PopoverTrigger>
                <Input
                  _hover={{ bg: "gray.50" }}
                  cursor="pointer"
                  as={Box}
                  color="gray.400"
                  borderLeftRadius="none"
                >
                  <Text py="2">
                    {value && value instanceof Date && value.toDateString()}
                    {value &&
                      !(value instanceof Date) &&
                      new Date(value).toDateString()}
                  </Text>
                </Input>
              </PopoverTrigger>
              <Portal appendToParentPortal={false}>
                <PopoverContent
                  rootProps={{ zIndex: "1500" }}
                  width="24rem"
                  boxShadow="xl"
                  _focus={{ outline: "none" }}
                >
                  <PopoverArrow />
                  <PopoverBody>
                    <Calendar
                      onChange={(e: Event) => {
                        onChange(e);
                      }}
                      date={
                        value
                          ? value instanceof Date
                            ? value
                            : new Date(value)
                          : new Date()
                      }
                      {...inputProps}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>

            {rightAddon && <InputRightAddon children={rightAddon} />}
          </InputGroup>
        )}
      />

      {useForm?.formState.errors[name] && (
        <FormErrorMessage>
          <FormErrorIcon
            icon={<ChakraAwesome icon={["fas", "circle-exclamation"]} />}
          />
          {useForm.formState.errors[name].message}
        </FormErrorMessage>
      )}
      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  );
}
