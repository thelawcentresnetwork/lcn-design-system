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
            "validation": { required: 'Please fill this in...' }
        },
        "phone": {
            "type": "string",
            "label": "Phone",
            "leftAddon": "+44",
            "rightAddon": "UK"
        },
        "link": {
            "type": "string",
            "label": "Link",
            "hint": "This is some helper text to explain what a link is.",
            "placeholder": "https://..."
        },
        "number_of_cats": {
            "type": "integer",
            "label": "Number of cats",
            "min": 1,
            "max": 5
        },
        "choose": {
            "type": "array",
            "ui": "radio",
            "label": "Choose me",
            "items": [
                {
                    "value": "1",
                    "label": "An option for 1"
                },
                {
                    "value": "2",
                    "label": "An option for 2"
                }
            ]
        },
        "select": {
            "type": "array",
            "label": "Choose me",
            "items": [
                {
                    "value": "1",
                    "label": "An option for 1"
                },
                {
                    "value": "2",
                    "label": "An option for 2"
                }
            ]
        },
        "address": {
            "type": "text",
            "label": "Address",
            "rows": 5
        },
        "check": {
            "type": 'boolean',
            "label": "Check me"
        },
        "toggle": {
            "ui": "switch",
            "type": 'boolean',
            "label": "Toggle me"
        },
        "file": {
            "type": 'file',
            "label": "Upload"
        },
        "keydate": {
            "type": 'date',
            "label": "Key date"
        }
    }
}