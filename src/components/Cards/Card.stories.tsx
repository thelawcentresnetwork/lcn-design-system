import { Meta, StoryObj } from '@storybook/react'
import { CardProps, Card, CardWithExtended } from './Cards'
import { selectColours } from '../../atoms/Colours/selectColours'
import React from 'react'
import CardImage from '../../assets/card-image.png'
import HorizontalCardImage from '../../assets/horizontal-card-image.png'
export default {
  title: 'Components/Cards',
  component: Card,
  args: {
    title: 'Title',
    body: 'Your donations are more important than ever. As the costs of living increase and legal aid gets cut, we need your help so that money is never a barrier to getting justice.',
    type: 'short',
    backgroundColor: 'brand.legacyBlue',
    color: 'white',
    downloadFileURL:
      'https://assets.ctfassets.net/y26owwfe9yxn/4NtswtIwjtB4HjQcysjouJ/f24d3353456d93cc3722bf9166e372ca/Agile-PM-101-Beginners-Guide-Non-PM-Ebook-download-open.pdf',
    downloadFileTitle: 'Agile for beginners',
    link: 'https://www.google.com',
  },
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    link: { control: 'text' },
    type: { control: 'text' },
    linkText: { control: 'text' },
    backgroundColor: selectColours,
    color: selectColours,
  },
} as Meta<CardProps>

export const CardStory: StoryObj<typeof Card> = (args: CardProps) => (
  <Card {...args} />
)

CardStory.args = {
  ...CardStory.args,
}

export const CardStoryLong: StoryObj<typeof Card> = (args: CardProps) => (
  <Card {...args} />
)

CardStoryLong.args = {
  ...CardStory.args,
  type: 'long',
}

export const CardWithExtendedStory: StoryObj<typeof CardWithExtended> = (
  args: CardProps
) => <CardWithExtended {...args} />

CardWithExtendedStory.args = {
  ...CardWithExtendedStory.args,
}

export const CardWithExtendedStoryLong: StoryObj<typeof CardWithExtended> = (
  args: CardProps
) => <CardWithExtended {...args} />

CardWithExtendedStoryLong.args = {
  ...CardWithExtendedStoryLong.args,
  type: 'long',
}

export const CardWithImage: StoryObj<typeof Card> = (args: CardProps) => (
  <Card {...args} />
)

CardWithImage.args = {
  ...CardWithImage.args,
  type: 'short',
  image: CardImage,
}

export const CardWithExtendedLongImageStory: StoryObj<
  typeof CardWithExtended
> = (args: CardProps) => <CardWithExtended {...args} />

CardWithExtendedLongImageStory.args = {
  ...CardWithExtendedLongImageStory.args,
  type: 'long',
  image: HorizontalCardImage,
}
