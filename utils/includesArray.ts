export const includesArray = (
  string: string,
  ...patterns: string[]
) => {
  return patterns.some((pattern) =>
    string.includes(pattern)
  )
}
