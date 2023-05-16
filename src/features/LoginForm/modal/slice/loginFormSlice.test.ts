import type { LoginFormSchema } from '../types/loginFormSchema'
import {
  loginActions,
  loginReducer,
} from './loginFormSlice'

describe('loginSlice', () => {
  test('setEmail', () => {
    const state: DeepPartial<LoginFormSchema> = {
      username: 'username',
    }
    expect(
      loginReducer(
        state as LoginFormSchema,
        loginActions.setEmail('newEmail')
      )
    ).toEqual({
      username: 'newEmail',
    })
  })

  test('setPassword', () => {
    const state: DeepPartial<LoginFormSchema> = {
      password: 'password',
    }

    expect(
      loginReducer(
        state as LoginFormSchema,
        loginActions.setPassword('newPassword')
      )
    ).toEqual({ password: 'newPassword' })
  })
})
