import { library, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

import { fal } from '@fortawesome/pro-light-svg-icons'

import {
  faAngleRight,
  faSearch,
  faTimesCircle
} from '@fortawesome/pro-regular-svg-icons'

import {
  fas
} from '@fortawesome/pro-solid-svg-icons'

library.add(
  fal,
  fas,
  faAngleRight,
  faSearch,
  faTimesCircle
)

const icons = {}

export default icons
