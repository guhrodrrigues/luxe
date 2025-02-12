import path from 'node:path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@/registry',
          replacement: path.resolve(__dirname, 'packages/react/src'),
        },
      ],
    },
  }
})
