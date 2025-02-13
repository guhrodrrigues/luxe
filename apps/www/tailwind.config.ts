import type { Config } from 'tailwindcss'

import rootTailwindConfig from '../../tailwind.config'

export default {
  ...rootTailwindConfig,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
} as Config
