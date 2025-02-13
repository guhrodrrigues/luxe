import '@luxe/react/styles.css'

import { withThemeByClassName } from '@storybook/addon-themes'

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
]

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  decorators,
}

export default preview
