import React from 'react'
import { ChakraComponent } from '@chakra-ui/react'
import { FaTriangleExclamation } from 'react-icons/fa6'

// Polyfill for FontAwesome and Chakra UI.

// '@fortawesome/fontawesome-svg-core'
export type IconName = string
export type IconPrefix = string
export type IconDefinition = {
  prefix: IconPrefix
  iconName: IconName
  icon: [number, number, unknown[], string, string]
}
export const library = {
  add: (...icons: IconDefinition[]) => {
    console.log('library.add', icons)
  },
}

// '@fortawesome/react-fontawesome'
export const FontAwesomeIcon = (() => {
  return <FaTriangleExclamation />
})

// Only used in lcn_ems

// '@fortawesome/pro-light-svg-icons'
export const fal = FontAwesomeIcon

// '@fortawesome/pro-solid-svg-icons'
export const fas = FontAwesomeIcon

// '@fortawesome/free-brands-svg-icons'
export const faMicrosoft = FontAwesomeIcon
export const faWhatsapp = FontAwesomeIcon
export const faSalesforce = FontAwesomeIcon
