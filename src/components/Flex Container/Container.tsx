import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'

export interface FullWidthContainerProps extends FlexProps {
  alignment?: string
  orientation?: 'row' | 'column'
  width?: string
  backgroundColor?: string
}

const calculateFlexValues = (
  orientation: FullWidthContainerProps['orientation'],
  alignment?: FullWidthContainerProps['alignment'],
  backgroundColor?: FullWidthContainerProps['backgroundColor'],
  width?: FullWidthContainerProps['width']
) => {
  const isColumn = orientation === 'column'
  const isLeftAlignment = alignment === 'start'
  const isRightAlignment = alignment === 'end'

  const alignItemsValue = isColumn
    ? isLeftAlignment
      ? 'flex-start'
      : isRightAlignment
      ? 'flex-end'
      : 'center'
    : 'flex-start'

  const justifyContentValue = isColumn
    ? 'flex-start'
    : isLeftAlignment
    ? 'flex-start'
    : isRightAlignment
    ? 'flex-end'
    : 'center'

  let maxWidthValue
  if (width === 'Narrow') {
    maxWidthValue = '350px'
  } else if (width === 'Moderate') {
    maxWidthValue = '500px'
  } else if (width === 'Large') {
    maxWidthValue = '715px'
  } else {
    maxWidthValue = '1250px'
  }

  return {
    flexDirection: orientation || 'row',
    backgroundColor: backgroundColor || 'transparent',
    alignItems: alignItemsValue,
    justifyContent: justifyContentValue,
    maxWidth: maxWidthValue,
    width: '100%',
    flexWrap: 'wrap' as 'wrap' | 'nowrap' | 'wrap-reverse',
    gap: '3.5rem',
    mb: '2rem',
  }
}

export const FullWidthContainer = ({
  alignment,
  orientation,
  backgroundColor,
  children,
}: FullWidthContainerProps) => {
  const flexValues = calculateFlexValues(
    orientation,
    alignment,
    backgroundColor
  )

  return <Flex {...flexValues}>{children}</Flex>
}

export const ContainerItem = ({
  alignment,
  orientation,
  width,
  backgroundColor,
  children,
}: FullWidthContainerProps) => {
  const flexValues = calculateFlexValues(
    orientation,
    alignment,
    backgroundColor,
    width
  )

  return <Flex {...flexValues}>{children}</Flex>
}
