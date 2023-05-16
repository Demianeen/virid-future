import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import type { StateSchema } from 'app/providers/StoreProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import userEvent from '@testing-library/user-event'

export interface ComponentRenderOptions {
  route?: string
  preloadedState?: DeepPartial<StateSchema>
}

export const componentRender = (
  Component: ReactNode,
  {
    route = '/',
    preloadedState,
  }: ComponentRenderOptions = {}
) => {
  return {
    user: userEvent.setup(),
    ...render(
      <MemoryRouter initialEntries={[route]}>
        <StoreProvider preloadedState={preloadedState}>
          {Component}
        </StoreProvider>
      </MemoryRouter>
    ),
  }
}
