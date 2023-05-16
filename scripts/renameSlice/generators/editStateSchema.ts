import fs from 'fs'
import { resolveRoot } from '../../../utils/resolveRoot'

interface EditStateSchemaProps {
  decapitalizedOldName: string
  decapitalizedNewName: string
  oldName: string
  newName: string
}

export const editStateSchema = ({
  decapitalizedOldName,
  decapitalizedNewName,
  oldName,
  newName,
}: EditStateSchemaProps) => {
  const stateSchemaPath = resolveRoot(
    'src',
    'app',
    'providers',
    'StoreProvider',
    'config',
    'stateSchema.ts'
  )
  const stateSchema = fs.readFileSync(
    stateSchemaPath,
    'utf-8'
  )

  try {
    if (stateSchema.includes(decapitalizedNewName)) {
      const newStateSchema = stateSchema
        .replace(
          new RegExp(
            `import type { ${decapitalizedOldName}Schema } from '..\\/..\\/..\\/..\\/${oldName}\\/model\\/types\\/${decapitalizedOldName}Schema'`,
            'g'
          ),
          `import type { ${decapitalizedNewName}Schema } from '..\\/..\\/..\\/..\\/${newName}\\/model\\/types\\/${decapitalizedNewName}Schema'`
        )
        .replace(
          new RegExp(
            `${decapitalizedOldName}: ${decapitalizedOldName}Schema`,
            'g'
          ),
          `${decapitalizedNewName}: ${decapitalizedNewName}Schema`
        )
        .replace(
          new RegExp(
            `${decapitalizedOldName}\\?: ${decapitalizedOldName}Schema`,
            'g'
          ),
          `${decapitalizedNewName}\\?: ${decapitalizedNewName}Schema`
        )

      fs.writeFileSync(
        stateSchemaPath,
        newStateSchema,
        'utf-8'
      )
    }
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(
        `Failed to edit state schema: ${e.message}`
      )
    }
  }
}
