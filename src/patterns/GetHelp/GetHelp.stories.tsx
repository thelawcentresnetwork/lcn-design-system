import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import GetHelp from './GetHelp'

const meta: Meta<typeof GetHelp> = {
  title: 'Patterns/Get Help',
  args: {
    areasOfLaw: {
      actionsAgainstPublicAuthorities:
        'Description of actions against public authorities law',
      asylum: 'Description of asylum law',
      communityCare: 'Description of community care law',
      consumer: 'Description of consumer law',
      conveyancy: 'Description of conveyancy law',
      costOfLiving: 'Description of cost of living law',
      crime: 'Description of crime law',
      debt: 'Description of debt law',
      discrimination: 'Description of discrimination law',
      education: 'Description of education law',
      employment: 'Description of employment law',
      family: 'Description of family law',
      general: 'Description of general law',
      housing: 'Description of housing law',
      humanRights: 'Description of human rights law',
      immigration: 'Description of immigration law',
      mentalHealth: 'Description of mental health law',
      motoringOffences: 'Description of motoring offences',
      other: 'Description of other',
      personalInjury: 'Description of personal injury',
      publicLaw: 'Description of public law',
      smallClaims: 'Description of small claims',
      welfareBenefits: 'Description of welfare benefits',
      willsAndProbate: 'Description of wills and probate',
      youthAdviceServices: 'Description of youth advice services',
    },
    searchWordOfCaution:
      ' Please bear in mind that the following Law Centres may not be able to help due to funding.',
  },
}

export default meta

type Story = StoryObj<typeof GetHelp>

export const GetHelpFlow: Story = {
  render: (args) => <GetHelp {...args} />,
}
