import React from 'react'
import { selectColours } from '../Colours/selectColours'
import { StoryObj, Meta } from '@storybook/react'
import {
  Section,
  ExtendedSectionLeft,
  ExtendedSectionRight,
  SlantedSectionTop,
  HeroSection,
  SectionProps,
} from './Section'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    bg: selectColours,
  },
} as Meta

export const DefaultSection: StoryObj<SectionProps> = (args: SectionProps) => (
  <Section {...args} />
)
DefaultSection.args = {
  bg: 'brand.legacyBlue',
}

export const ExtendedLeftSection: StoryObj<SectionProps> = (
  args: SectionProps
) => <ExtendedSectionLeft {...args} />
ExtendedLeftSection.args = {
  bg: 'brand.legacyBlue',
}
export const HeroSectionSection: StoryObj<SectionProps> = (
  args: SectionProps
) => <HeroSection {...args} />
HeroSectionSection.args = {
  bg: 'brand.legacyBlue',
}

export const ExtendedRightSection: StoryObj<SectionProps> = (
  args: SectionProps
) => <ExtendedSectionRight {...args} />
ExtendedRightSection.args = {
  bg: 'brand.legacyBlue',
}

export const SlantedTopSection: StoryObj<SectionProps> = (
  args: SectionProps
) => <SlantedSectionTop {...args} />
SlantedTopSection.args = {
  bg: 'brand.legacyBlue',
}
