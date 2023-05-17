import type { Story } from '@storybook/react'
import type { StateSchema } from 'app/providers/StoreProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
// that's okay that we import this not from sort.ts because we use it only in storybook
import type { StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema'
import type { Reducer } from 'redux'
import type { ReducersList } from '../hooks/useDynamicModuleLoader/useDynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {}

export const StoreDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) =>
  function decorator(StoryComponent: Story) {
    return (
      <StoreProvider
        preloadedState={initialState}
        preloadedAsyncReducers={{
          ...(defaultAsyncReducers as Record<
            StateSchemaKey,
            Reducer
          >),
          ...asyncReducers,
        }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
