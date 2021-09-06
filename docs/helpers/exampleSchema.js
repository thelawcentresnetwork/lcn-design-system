export default {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://design-system.lawcentres.org.uk/docs/heplers/exampleSchema.js",
    "title": "Form",
    "description": "An example form schema for the Law Centres Network design system",
    "type": "object",
    "properties": {
        "first_name": {
            "type": "string",
            "label": "First name",
        },
        "second_name": {
            "type": "string",
            "label": "Link",
            "hint": "This is some helper text to explain what a link is.",
            "placeholder": "https://..."
        },
        "number_of_cats": {
            "type": "integer",
            "label": "Number of cats"
        },
        "select_one": {
            "type": "array",
            "ui": "radio",
            "label": "Choose me",
            "items": [
                {
                    "value": "1",
                    "label": "An option"
                },
                {
                    "value": "2",
                    "label": "An option"
                }
            ]
        },
        "select_two": {
            "type": "array",
            "label": "Choose me",
            "items": [
                {
                    "value": "1",
                    "label": "An option"
                },
                {
                    "value": "2",
                    "label": "An option"
                }
            ]
        },
        "sometext": {
            "type": "text",
            "label": "Address"
        },
        "bool_1": {
            "type": 'boolean',
            "label": "Check me"
        },
        "bool_2": {
            "ui": "switch",
            "type": 'boolean',
            "label": "Toggle me"
        },
        "keydate": {
            "type": 'date',
            "label": "Key date"
        }
    },
    "required": ["first_name"]
}