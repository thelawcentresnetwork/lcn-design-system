import { Meta, StoryObj } from '@storybook/react'
import { CardProps, Card, CardWithExtended } from './Cards'
import { selectColours } from '../../atoms/Colours/selectColours'
import React from 'react'

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'Title',
    body: 'Your donations are more important than ever. As the costs of living increase and legal aid gets cut, we need your help so that money is never a barrier to getting justice.',
    type: 'short',
    backgroundColor: 'brand.legacyBlue',
    color: 'white',
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
