import path from 'node:path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'packages/react/src'),
        },
        {
          find: '@/registry',
          replacement: path.resolve(__dirname, 'packages/react/src/components'),
        },
      ],
    },
  }
})
