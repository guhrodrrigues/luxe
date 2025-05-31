import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: ['./src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    target: 'esnext',
  }
})
