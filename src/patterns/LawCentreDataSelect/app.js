import React from 'react'
import CreatableSelect from 'react-select/creatable'
import { useEffect, useState } from 'react'

export default function LawCentreDataSelect({
  dataEndpoint,
  isMulti,
  inputProps,
  callbacks,
}) {
  // Currently selected options
  const [selectedOptions, setSelectedOptions] = useState([])

  // Current options in Select
  const [availableOptions, setAvailableOptions] = useState([])

  // Option data following LCN Schema e.g
  // https://members.lawcentres.org.uk/api/v1/categorisation/areaoflaw
  const [items, setItems] = useState([])

  const handleChange = (options) => {
    setSelectedOptions(options)

    if (callbacks) {
      if (dataEndpoint) {
        callbacks.setValue(options)
      } else {
        callbacks.setValue(options.map((item) => item.value))
      }
    }
  }

  const handleCreate = (value) => {
    let newItem = null

    if (dataEndpoint) {
      newItem = {
        type: 'custom',
        id: 'custom',
        attributes: {
          label: value,
          value: value,
        },
      }
    } else {
      newItem = value
    }

    let newItems = [...items]
    newItems.push(newItem)

    setItems(newItems)

    let newSelectedOptions = [...selectedOptions]

    newSelectedOptions.push({
      value: value,
      label: value,
    })

    setSelectedOptions(newSelectedOptions)

    if (callbacks) {
      if (dataEndpoint) {
        callbacks.setValue(newSelectedOptions)
      } else {
        callbacks.setValue(newSelectedOptions.map((item) => item.value))
      }
    }
  }

  useEffect(() => {
    if (dataEndpoint) {
      fetch(dataEndpoint)
        .then((res) => res.json())
        .then(
          (response) => {
            setItems(response.data)

            if (callbacks) {
              let selected = callbacks.getValue()
              if (selected?.length > 0) {
                setSelectedOptions(selected)
              }
            }
          },
          (error) => {
            console.log('Error fetching items')
          }
        )
    } else if (callbacks) {
      let selected = callbacks.getValue()
      if (selected?.length > 0) {
        setItems(selected)
        setSelectedOptions(
          selected.map((item) => ({ label: item, value: item }))
        )
      }
    }
  }, [])

  useEffect(() => {
    let newOptions = []

    if (dataEndpoint) {
      newOptions = items.map((item) => {
        if (item.attributes) {
          return {
            label: item.attributes.label,
            value: item.attributes.value,
          }
        }
      })
    } else {
      newOptions = items.map((item) => {
        return {
          label: item,
          value: item,
        }
      })
    }

    setAvailableOptions(newOptions)
  }, [items])

  return (
    <CreatableSelect
      classNamePrefix="lcnSelect"
      value={selectedOptions}
      isMulti={isMulti || true}
      onCreateOption={(e) => handleCreate(e)}
      isLoading={dataEndpoint && items.length <= 1}
      onChange={(options) => handleChange(options)}
      options={availableOptions}
      {...inputProps}
    />
  )
}
