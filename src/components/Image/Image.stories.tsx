import React from 'react'
import { Container } from '@chakra-ui/react'
import { Meta } from '@storybook/react'

import CardImageOne from '../../assets/designSystemImageOne.png'
import Image, { ImageProps } from './Image'

export default {
  title: 'Image',
  args: {
    src: CardImageOne,
    alt: 'this is some alt text',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta

export const ImageStory = (args: ImageProps) => (
  <Container>
    <Image maxW="340px" {...args} />
  </Container>
)
