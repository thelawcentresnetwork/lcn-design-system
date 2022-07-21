import React from "react";
import { UseFormReturn, RegisterOptions } from "react-hook-form";
//@ts-ignore
import ChakraAwesome from "../../utilities/ChakraAwesome";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  NumberInputProps,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

interface DNumberProps extends NumberInputProps {
  name: string;
  label?: string;
  hint?: string;
  rightAddon?: string;
  leftAddon?: string;
  useForm?: UseFormReturn;
  validation?: RegisterOptions;
}

export default function DNumber({
  name,
  label,
  hint,
  leftAddon,
  rightAddon,
  colorScheme,
  useForm,
  validation,
  ...inputProps
}: DNumberProps) {
  return (
    <>
      <FormControl isInvalid={useForm?.formState.errors[name] || false}>
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup colorScheme={colorScheme}>
          {leftAddon && <InputLeftAddon children={leftAddon} />}
          <NumberInput {...inputProps}>
            <NumberInputField {...useForm?.register(name, validation)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {rightAddon && <InputRightAddon children={rightAddon} />}
        </InputGroup>

        {useForm?.formState.errors[name] && (
          <FormErrorMessage>
            <ChakraAwesome icon={["fas", "circle-exclamation"]} />
            {useForm.formState.errors[name].message}
          </FormErrorMessage>
        )}
        {hint && <FormHelperText>{hint}</FormHelperText>}
      </FormControl>
    </>
  );
}
