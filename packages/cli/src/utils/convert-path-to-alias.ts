export function convertPathToAlias(path: string) {
  if (path.startsWith('./')) {
    return path.replace(/^.\//, '@/')
  }

  return `@/${path}`
}
