import React from 'react'
import { UseFormReturn } from 'react-hook-form'

import { Stack } from '@chakra-ui/react'

import DInput from './Input'
import DNumber from './Number'
import DTextarea from './Textarea'
import DCheckbox from './Checkbox'
import DRadio from './Radio'
import DSelect from './Select'
import DDate from './Date'
//@ts-ignore
import DFile from './File'

interface DFormProps {
  useForm: UseFormReturn
  schema: {
    properties: {
      name: string
      type: string
      label?: string
      hint?: string
      items?: {
        value: string
        label: string
      }[]
      ui?: string
      ppi?: boolean
      placeholder?: string
      leftAddon?: string
      rightAddon?: string
      validation?: {}
    }[]
  }
}

interface DFormFieldProps {
  input: string
}

export default function DFormSchema({ schema, useForm }: DFormProps) {
  const FormField = ({ input }: DFormFieldProps) => {
    let field = schema.properties.find((p) => p.name === input)

    if (field) {
      let { validation, type, items, ui, name, ppi, ...inputProps } = field

      switch (type) {
        case 'string':
          return (
            <DInput
              useForm={useForm}
              name={input}
              validation={validation}
              {...inputProps}
            />
          )
        case 'integer':
          return (
            <DNumber
              name={input}
              useForm={useForm}
              validation={validation}
              {...inputProps}
            />
          )
        case 'date':
          return (
            <DDate
              useForm={useForm}
              name={input}
              validation={validation}
              {...inputProps}
            />
          )
        case 'boolean':
          return (
            <>
              {ui == 'switch' && (
                <DCheckbox
                  useForm={useForm}
                  type="switch"
                  name={input}
                  validation={validation}
                  {...inputProps}
                />
              )}
              {!ui && (
                <DCheckbox
                  useForm={useForm}
                  name={input}
                  validation={validation}
                  {...inputProps}
                />
              )}
            </>
          )

        case 'array':
          return (
            <>
              {field.ui == 'radio' && (
                <DRadio
                  useForm={useForm}
                  options={items}
                  name={input}
                  validation={validation}
                  {...inputProps}
                />
              )}
              {!field.ui && (
                <DSelect
                  useForm={useForm}
                  options={items}
                  name={input}
                  validation={validation}
                  {...inputProps}
                />
              )}
            </>
          )
        case 'text':
          return (
            <DTextarea
              useForm={useForm}
              name={input}
              validation={validation}
              {...inputProps}
            />
          )
        case 'file':
          return (
            <DFile
              useForm={useForm}
              name={input}
              validation={validation}
              {...inputProps}
            />
          )
        default:
          console.log('Can not render field: ' + input)
          return <></>
      }
    } else {
      console.log('Can not render field: ' + input)
      return <></>
    }
  }

  return (
    <>
      {schema.properties && (
        <Stack spacing="6">
          {schema.properties?.map((property, index) => (
            <FormField key={index} input={property.name} />
          ))}
        </Stack>
      )}
    </>
  )
}
