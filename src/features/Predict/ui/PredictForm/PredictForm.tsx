import { HStack, VStack } from 'shared/ui/Stack';
import {
  Text,
  TextSize,
  TextTheme,
} from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import type { FormEvent } from 'react';
import { useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { usePredictMutation } from '../../api/predictApi';

interface PredictProps {
  className?: string;
}

export const PredictForm = ({
  className,
}: PredictProps) => {
  const [predict, { isLoading, data, isError }] =
    usePredictMutation();
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      if (isLoading) return;
      predict(formData);
    },
    [isLoading, predict]
  );

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
        label='Upload an image for accurate land type predictions'
        name='file'
        accept='image/*'
        required
      />
      <HStack gap={0.5}>
        <Button type='submit'>
          {data ? 'Resubmit' : 'Submit'}
        </Button>
        {isLoading && <Spinner />}
      </HStack>
      {isError && (
        <Text
          theme={TextTheme.ERROR}
          title='Error'
          text='Something went wrong. Try again later'
        />
      )}
      {data && (
       <div>
       <Text title={`Land Type Detected: ${data.label}`} />
       <Text title='Tips for Maximum Crop Yields:' />
       {data.recommendation.split('\n').map((line, index) => (
         <p key={index}>{line}</p>
       ))}
     </div>
     
      )}
    </VStack>
  );
};
