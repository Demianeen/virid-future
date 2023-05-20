import { VStack } from 'shared/ui/Stack'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import type { FormEvent } from 'react'
import { useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { usePredictMutation } from '../../api/predictApi'

interface PredictProps {
  className?: string
}

export const PredictForm = ({
  className,
}: PredictProps) => {
  const [predict, { isLoading, data }] =
    usePredictMutation()
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const formData = new FormData(form)
      const file = formData.get('file')

      if (file instanceof File) {
        if (isLoading) return
        predict(file)
      }
    },
    [isLoading, predict]
  )

  console.log(data)

  return (
    <VStack
      gap={1.25}
      as='form'
      className={className}
      onSubmit={onSubmit}
    >
      <Text title='Predict' size={TextSize.L} />
      <Input
        type='file'
        label='Upload the file to predict'
        name='file'
        required
      />
      <Button type='submit'>Submit</Button>
      {data && <Text text={data} />}
    </VStack>
  )
}
