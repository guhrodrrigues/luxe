import * as p from '@clack/prompts'
import camelCase from 'camelcase'

export async function getSelectedComponents(
  allAvailableComponents: string[],
  argComponents: string[],
) {
  let selectedComponents = argComponents

  if (selectedComponents.length === 0) {
    selectedComponents = (await p.multiselect({
      message:
        'Select your components › (`Space` to select) (`A` to toggle all) (`Enter` to confirm).',
      options: allAvailableComponents.map(componentName => {
        return {
          label: camelCase(componentName, {
            pascalCase: true,
          }),
          value: componentName,
        }
      }),
    })) as string[]

    if (p.isCancel(selectedComponents)) {
      p.cancel('No components selected. Operation cancelled.')
    }
  }

  return selectedComponents
}
