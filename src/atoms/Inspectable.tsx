// This is a wrapper around your Contentful which allows you to jump to them easily
// in Preview mode, hopefully making the process of using Contentful much smoother for
// non-technical editors.
// It should default to normal if using in a non-Contentful environment.

import React from 'react'
import type { Entry } from 'contentful'


import {
    Box,
    Heading,
    Text,
    Image,
    Flex,
    Button,
} from '@chakra-ui/react'

type BaseInspectorProps = {
    entry?: Entry<Record<string, unknown>>
    field: string
    children?: React.ReactNode
    inspectorProps?: (options: { fieldId: string }) => object
}

export function withContentfulInspector<T extends object>(
    Component: React.ComponentType<T>
) {
    const WrappedComponent = ({
        entry,
        field,
        children,
        inspectorProps,
        ...rest
    }: BaseInspectorProps & T) => {
        // Use passed inspector props, or create our own if needed
        const getInspectorProps = inspectorProps ||
            (entry?.sys?.id ? useContentfulInspectorMode({ entryId: entry.sys.id }) : () => ({}))

        const inspectorAttrs = getInspectorProps({ fieldId: field })

        // For self-closing components like Image, don't pass children
        const isSelfClosing = Component === Image

        if (isSelfClosing) {
            return (
                <Component
                    {...(rest as T)}
                    {...(inspectorAttrs as object)}
                />
            )
        }

        // Use children if provided, otherwise get the field value from entry
        const fieldContent = children ?? (entry?.fields?.[field] as React.ReactNode)

        return (
            <Component
                {...(rest as T)}
                {...(inspectorAttrs as object)}
            >
                {fieldContent}
            </Component>
        )
    }

    WrappedComponent.displayName = `InspectorWrapped(${Component.displayName || Component.name || 'Component'})`

    return WrappedComponent
}



export const Inspectable = {
    Box: withContentfulInspector(Box),
    Heading: withContentfulInspector(Heading),
    Text: withContentfulInspector(Text),
    Image: withContentfulInspector(Image),
    Flex: withContentfulInspector(Flex),
    Button: withContentfulInspector(Button)
}
