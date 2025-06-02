// Script responsible for generating the registry

import path from 'node:path'
import { promises as fs } from 'node:fs'

import { glob } from 'glob'
import { Project, type ImportDeclaration } from 'ts-morph'

/* =====================================
 * Types
 * ===================================== */

type RegistryType = 'components'

type RegistryFile = {
  name: string
  content: string
}

type Registry = {
  name: string
  externalDependencies: string[]
  internalDependencies: string[]
  file: RegistryFile
}

/* =====================================
 * Constants
 * ===================================== */

const IGNORED_EXTERNAL_DEPENDENCIES = new Set([
  'react',
  'motion/react',
  'lucide-react',
])
const COMPONENTS_PATH = path.resolve(
  process.cwd(),
  'packages/react/src/components',
)
const WWW_PUBLIC_PATH = path.resolve(process.cwd(), 'apps/www/public')

/* =====================================
 * Main Function
 * ===================================== */

async function main() {
  try {
    console.log('Initializing registry generation...')
    await clearRegistryFolders(['components'])

    const registryMap: Map<RegistryType, Registry[]> = new Map()
    const project = new Project()

    const componentPaths = await glob(`${COMPONENTS_PATH}/*.tsx`)

    for (const componentPath of componentPaths) {
      const sourceFile = project.addSourceFileAtPath(componentPath)
      const importDeclarations = sourceFile.getImportDeclarations()

      const importPaths = getImportPaths(importDeclarations)

      const { externalDependencies, internalDependencies } =
        getDependencies(importPaths)

      applyAliasTemplates(importDeclarations)

      const { name, base: filename } = path.parse(sourceFile.getBaseName())

      console.log(`🔄 Processing component: ${name}`)

      const registryEntry: Registry = {
        name,
        externalDependencies,
        internalDependencies,
        file: {
          name: filename,
          content: sourceFile.getText(),
        },
      }

      const previousEntries = registryMap.get('components') ?? []
      previousEntries.push(registryEntry)

      registryMap.set('components', previousEntries)

      await saveRegistryFile(
        'components',
        name,
        JSON.stringify(registryEntry, null, 2),
      )

      console.log(`✅ Successfully processed component: ${name}`)
    }

    await saveRegistryFile(
      'components',
      'index',
      JSON.stringify(
        {
          components: registryMap.get('components')?.map(({ name }) => name),
        },
        null,
        2,
      ),
    )
    console.log('🎉 Registry generation completed successfully.')
  } catch (err) {
    console.error('⚠️ Error during registry generation:', err)
  }
}

main()

/* =====================================
 * Helper Functions
 * ===================================== */

function getImportPaths(importDeclarations: ImportDeclaration[]): string[] {
  return importDeclarations
    .map(importPath => importPath.getModuleSpecifierValue())
    .filter(importPath => !IGNORED_EXTERNAL_DEPENDENCIES.has(importPath))
}

function getDependencies(importPaths: string[]) {
  const componentRegex = /\bcomponents\b/

  return importPaths.reduce(
    (deps, importPath) => {
      if (componentRegex.test(importPath)) {
        deps.internalDependencies.push(path.basename(importPath))
      } else if (!importPath.startsWith('@/')) {
        deps.externalDependencies.push(importPath)
      }
      return deps
    },
    {
      externalDependencies: [],
      internalDependencies: [],
    } as Pick<Registry, 'externalDependencies' | 'internalDependencies'>,
  )
}

function applyAliasTemplates(importDeclarations: ImportDeclaration[]) {
  const aliasRegex = /\b(components|utils)\b/

  for (const importDeclaration of importDeclarations) {
    const importPathNode = importDeclaration.getModuleSpecifier()
    const importPath = importPathNode.getLiteralValue()

    if (aliasRegex.test(importPath)) {
      const [matchedAlias] = importPath.match(aliasRegex) ?? []
      importPathNode.replaceWithText(
        `'<%= it.aliases.${matchedAlias} %>/${path.basename(importPath)}'`,
      )
    }
  }
}

async function saveRegistryFile(
  type: RegistryType,
  filename: string,
  content: string,
) {
  const fileJSON = `${filename}.json`

  try {
    await fs.writeFile(
      `${WWW_PUBLIC_PATH}/registry/${type}/${fileJSON}`,
      content,
      'utf8',
    )
    console.log(`Successfully created registry file: ${fileJSON}`)
  } catch (err) {
    console.error(`Failed to create registry file: ${fileJSON}`, err)
    throw new ReferenceError(`Could not create registry file: ${fileJSON}`)
  }
}

async function clearRegistryFolders(folders: RegistryType[]) {
  try {
    for (const folder of folders) {
      console.log(`Clearing registry folder: ${folder}`)

      await fs.rmdir(`${WWW_PUBLIC_PATH}/registry/${folder}`, {
        recursive: true,
      })

      await fs.mkdir(`${WWW_PUBLIC_PATH}/registry/${folder}`)
    }
    console.log('Registry folders cleared successfully.')
  } catch (err) {
    console.error('Error clearing registry folders:', err)
    throw new ReferenceError('Unable to clean registry folder')
  }
}
