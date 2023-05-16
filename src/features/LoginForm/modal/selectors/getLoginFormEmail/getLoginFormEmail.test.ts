import type { StateSchema } from 'app/providers/StoreProvider'
import { getLoginFormEmail } from './getLoginFormEmail'

describe('getLoginFormUsername', () => {
  it('should return the username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
        username: 'username',
        password: '',
      },
    }
    expect(getLoginFormEmail(state as StateSchema)).toEqual(
      'username'
    )
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginFormEmail(state as StateSchema)).toEqual(
      ''
    )
  })
})
