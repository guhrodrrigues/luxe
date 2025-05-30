#! /usr/bin/env node

import { program } from 'commander'

import { description, name, version } from '../package.json'

import { add } from '@/commands/add'
import { init } from '@/commands/init'

function main() {
  program
    .version(version)
    .name(name)
    .description(description)
    .addCommand(init)
    .addCommand(add)

  program.parse()
}

main()
