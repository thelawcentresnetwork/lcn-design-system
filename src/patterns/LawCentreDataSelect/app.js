import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { useEffect, useState } from 'react'

export default function LawCentreDataSelect({ dataEndpoint, isMulti, contentfulField }) {

    // Currently selected options
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Current options in Select
    const [availableOptions, setAvailableOptions] = useState([]);

    // Option data following LCN Schema e.g
    // https://members.lawcentres.org.uk/api/v1/categorisation/areaoflaw
    const [items, setItems] = useState([]);

    const handleChange = (options) => {

      setSelectedOptions(options);
      contentfulField.setValue(options);
      //console.log(options)
      //setValue(options);

    };

    const handleCreate = (value) => {

      let newItem = {
          type: "custom",
          id: "custom",
          attributes: {
            label: value,
            value: value
        }
      }

      let newItems = [...items]
      newItems.push(newItem)

      setItems(newItems)

      let newSelectedOptions = [...selectedOptions]
      newSelectedOptions.push({
        value: value,
        label: value
      })

      setSelectedOptions(newSelectedOptions)
      contentfulField.setValue(newSelectedOptions);

    }

    useEffect(() => {

      if(dataEndpoint) {

        fetch(dataEndpoint)
          .then(res => res.json())
          .then(
            (response) => {

              setItems(response.data)

              let selected = contentfulField.getValue()
              if(selected?.length>0) {
                setSelectedOptions(selected)
              }

            },
            (error) => {
              console.log("Error fetching items")
            }
          );

        }

    }, [dataEndpoint])

    useEffect(() => {

      let newOptions = items.map((item) => {
             if(item.attributes) {
               return {
                 label: item.attributes.label,
                 value: item.attributes.value
               }
             }
           }
         )

      setAvailableOptions(newOptions)

    }, [items])

    return (
      <CreatableSelect
        classNamePrefix="lcnSelect"
        value={ selectedOptions }
        isMulti={ isMulti || true }
        onCreateOption={ e => handleCreate(e) }
        isLoading={ (dataEndpoint && items.length <= 1) }
        onChange={ options => handleChange(options) }
        options={ availableOptions } />
    )

}
