import fs from 'fs'
import acorn from 'acorn'
import tsPlugin from 'acorn-typescript'
import type { Layer } from '../types/createSlice'
import { getPublicApiExports } from './getPublicApiExports'

interface RenameUsagesProps {
  layer: Layer
  sliceName: string
  dir: string
  decapitalizedOldName?: string
  decapitalizedNewName?: string
  capitalizedOldName?: string
  capitalizedNewName?: string
}

export const renameUsages = ({
  layer,
  sliceName,
  dir,
  decapitalizedOldName,
  decapitalizedNewName,
  capitalizedOldName,
  capitalizedNewName,
}: RenameUsagesProps) => {
  const exports = getPublicApiExports(layer, sliceName)
  fs.readdirSync(dir).forEach((file) => {
    const filePath = `${dir}/${file}`
    if (fs.statSync(filePath).isDirectory()) {
      renameUsages({
        layer,
        sliceName,
        dir: filePath,
      })
    } else {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      // const parser = acorn.Parser.extend(tsPlugin())
      // const node = parser.parse(fileContent, {
      //   ecmaVersion: 'latest',
      //   sourceType: 'module',
      //   locations: true,
      // })
      const node = acorn.Parser.extend(
        tsPlugin({ dts: true })
      ).parse(
        `
const a = 1
type A = number
export {
  a,
  type A as B
}
`,
        {
          sourceType: 'module',
          ecmaVersion: 'latest',
          locations: true,
        }
      )

      console.log(node)
    }
  })
}

renameUsages({
  layer: 'entities',
  sliceName: 'CommentForm1',
  dir: '/Users/demian/Desktop/program-learning/ulbitv/react-production/src/entities/CommentForm1',
})
