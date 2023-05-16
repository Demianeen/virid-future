import fs from 'fs'
import { resolveRoot } from '../../../utils/resolveRoot'
import type { Layer } from '../types/createSlice'

export const getPublicApiExports = (
  layer: Layer,
  sliceName: string
) => {
  // I can get all exported elements from public api and replace all theirs usages in the project. Example of public api export type { CommentFormSchema } from './model/types/commentFormSchema'
  // export { CommentFormAsync as CommentForm } from './ui/CommentForm/CommentForm.async'
  // write a function that can do it
  const publicApiPath = resolveRoot(
    'src',
    layer,
    sliceName,
    'index.ts'
  )
  const content = fs.readFileSync(publicApiPath, 'utf-8')
  const regex = /export { (.*) } from/g
  const matches = content.match(regex)
  if (matches) {
    const exports: string[] = []
    matches.forEach((match) => {
      const oneExport = match
        .replace('export { ', '')
        .replace(' } from', '')
      oneExport.replace(/[a-zA-Z1-9]+ as /g, '')
      oneExport.split(', ')
      exports.push(oneExport)
    })
    return exports
  }

  console.error('Public api is empty. No exports found')
  return []
}
