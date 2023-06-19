import CallToAction from '../components/CallToAction'
import React from 'react'

interface CallToActionProps {
  heading: string
  description: string
  buttonText: string
}

export default {
  title: 'Call To Action',

  argTypes: {
    heading: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
  },
}

export const Default: React.FC<CallToActionProps> = ({
  heading,
  description,
  buttonText,
}) => {
  return (
    <CallToAction
      heading={heading || 'Find out how Law Centres can help'}
      description={
        description ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
      buttonText={buttonText || 'Get Help'}
      link="/get-help"
    />
  )
}
