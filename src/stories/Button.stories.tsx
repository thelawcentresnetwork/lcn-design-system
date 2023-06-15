import CallToAction from '../components/CallToAction'
import React from 'react'

export default {
  title: 'Call To Action',
  component: CallToAction,
}

export const Default = () => {
  return (
    <CallToAction
      heading="Find out how Law Centres can help"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      buttonText="Get Help"
      link="/get-hep"
    />
  )
}
