import type { UserSchema } from 'entities/User'
import type { LoginFormSchema } from 'features/LoginForm'
import type {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import type { createReduxStore } from 'app/providers/StoreProvider'
import type { AxiosInstance } from 'axios'
import type { PageSchema } from 'widgets/Page'
import type { rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
  user: UserSchema
  page: PageSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Async reducers
  loginForm?: LoginFormSchema
}

export type StateSchemaKey = keyof StateSchema
export type StateReducer = Reducer<StateSchema>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: StateReducer
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithReducerManager
  extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<
  typeof createReduxStore
>['dispatch']

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<E> {
  rejectValue: E
  extra: ThunkExtraArg
  state: StateSchema
}
