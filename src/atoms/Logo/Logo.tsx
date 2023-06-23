import React from 'react'

import { LogoTypes } from './Logo.types'

import logo from '../../assets/lcn-logo.svg'
import logoMono from '../../assets/lcn-logo-white.svg'

const Logo = ({ variant }: LogoTypes) => (
  <img
    alt="The Law Centre Network logo"
    src={variant === 'colour' ? logo : logoMono}
  />
)
export default Logo
