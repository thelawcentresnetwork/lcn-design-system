import type { Preview } from '@storybook/react'
import Theme from '../src/theme/index'

const preview: Preview = {
  parameters: {
    chakra: {
      theme: Theme,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
