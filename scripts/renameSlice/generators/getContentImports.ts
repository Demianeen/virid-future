export const getContentImports = (content: string) => {
  const importRegex = /import .* from '.*'/g
  return content.match(importRegex)
}
