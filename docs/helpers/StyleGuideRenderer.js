import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from '../../src/theme'
import DefaultStyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer'

const StyleGuideRenderer = ({
  classes,
  title,
  version,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}) => (
  <ChakraProvider theme={Theme}>
    <DefaultStyleGuideRenderer
      classes={classes}
      title={title}
      version={version}
      homepageUrl={homepageUrl}
      toc={toc}
      hasSidebar={hasSidebar}
    >
      {children}
    </DefaultStyleGuideRenderer>
  </ChakraProvider>
)

export default StyleGuideRenderer
