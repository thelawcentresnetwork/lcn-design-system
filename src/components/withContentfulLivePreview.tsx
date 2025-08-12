import React from 'react'

function withContentfulLivePreview<P extends { entry?: Record<string, unknown>, preview?: boolean }>(
    Component: React.FC<P>
) {
    return function WrappedWithLivePreview(props: P) {
        // Just pass through without Live Preview for now
        return <Component {...(props as P)} />
    }
}

export default withContentfulLivePreview