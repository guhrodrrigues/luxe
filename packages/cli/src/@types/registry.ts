export type RegistryType = 'components'

export type RegistryFile = {
  name: string
  content: string
}

export type Registry = {
  name: string
  type: `ui:${RegistryType}`
  externalDependencies: string[]
  internalDependencies: string[]
  files: RegistryFile[]
}
