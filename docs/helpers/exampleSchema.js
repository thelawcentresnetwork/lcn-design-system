export default {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://design-system.lawcentres.org.uk/docs/heplers/exampleSchema.js",
  title: "Form",
  description:
    "An example form schema for the Law Centres Network design system",
  type: "object",
  properties: [
    {
      name: "first_name",
      type: "string",
      label: "First name",
      validation: { required: "Please fill this in..." },
    },
    {
      name: "phone",
      type: "string",
      label: "Phone",
      leftAddon: "+44",
      rightAddon: "UK",
    },
    {
      name: "link",
      type: "string",
      label: "Link",
      hint: "This is some helper text to explain what a link is.",
      placeholder: "https://...",
    },
    {
      name: "number_of_cats",
      type: "integer",
      label: "Number of cats",
      min: 1,
      max: 5,
    },
    {
      name: "choose",
      type: "array",
      ui: "radio",
      label: "Choose me",
      items: [
        {
          value: "1",
          label: "An option for 1",
        },
        {
          value: "2",
          label: "An option for 2",
        },
      ],
    },
    {
      name: "select",
      type: "array",
      label: "Choose a site",
      leftAddon: "https://",
      items: [
        {
          value: "1",
          label: "google.com",
        },
        {
          value: "2",
          label: "bing.com",
        },
      ],
    },
    {
      name: "select2",
      type: "array",
      leftAddon: "Add to me",
      creatable: true,
      isMulti: true,
      label: "I have no options but create some please",
      items: [],
    },
    {
      name: "address",
      type: "text",
      label: "Address",
      rows: 5,
    },
    {
      name: "check",
      type: "boolean",
      label: "Check me",
    },
    {
      name: "toggle",
      ui: "switch",
      type: "boolean",
      label: "Toggle me",
    },
    {
      name: "file",
      type: "file",
      label: "Upload",
    },
    {
      name: "keydate",
      type: "date",
      label: "Key date",
    },
  ],
};
