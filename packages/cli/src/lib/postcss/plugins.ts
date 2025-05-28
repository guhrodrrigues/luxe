import type { AtRule, Plugin, Rule } from 'postcss'
import postcssMergeRules from 'postcss-merge-rules'

const postcssMergeRootBlocks: Plugin = {
  postcssPlugin: 'postcss-merge-root-blocks',
  Once(root) {
    let firstRootBlock: Rule | null = null
    let lastRootBlock: Rule | null = null

    const importAtRules: AtRule[] = []

    root.walkAtRules('import', atRule => {
      importAtRules.push(atRule)
    })

    root.walkRules((rule: Rule) => {
      if (rule.selector === ':root') {
        if (!firstRootBlock) {
          firstRootBlock = rule
        }
        lastRootBlock = rule
      }
    })

    if (firstRootBlock && lastRootBlock && firstRootBlock !== lastRootBlock) {
      // @ts-expect-error
      firstRootBlock.each(node => {
        lastRootBlock!.append(node)
      })

      // @ts-expect-error
      firstRootBlock.remove()
    }

    if (importAtRules.length > 0) {
      for (const atRule of importAtRules) {
        atRule.remove()
        root.prepend(atRule)
      }
    }
  },
}

// @TODO: Create a plugin in the future that prevents code duplication
// const postcssRemoveDuplicateBlocks: Plugin = {
//   postcssPlugin: 'postcss-remove-duplicate-blocks',
//   Once(root) {},
// }

export { postcssMergeRules, postcssMergeRootBlocks }
