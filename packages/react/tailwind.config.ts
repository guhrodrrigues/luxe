import type { Config } from 'tailwindcss'

import rootTailwindConfig from '../../tailwind.config'

export default {
  ...rootTailwindConfig,
  content: ['./src/**/*.{ts,tsx}'],
} as Config
