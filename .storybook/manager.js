import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

import brandImage from './storybook-logo.svg'

addons.setConfig({
  theme: create({
    base: 'light',
    brandImage,
  }),
})
