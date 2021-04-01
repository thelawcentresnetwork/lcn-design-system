import { library, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

import { fal } from '@fortawesome/pro-light-svg-icons'

import {
  far
} from '@fortawesome/pro-regular-svg-icons'

import {
  fas
} from '@fortawesome/pro-solid-svg-icons'

library.add(
  fal,
  fas,
  far
)

const icons = {}

export default icons
