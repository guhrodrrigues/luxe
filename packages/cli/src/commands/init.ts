import { Command } from 'commander'

export const init = new Command()
  .name('init')
  .summary(
    'initialize your project with ready to use Luxe components. Practical, fast, and customizable.',
  )
  .action(() => {})
