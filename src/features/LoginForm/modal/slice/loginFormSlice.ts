import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { LoginFormSchema } from '../types/loginFormSchema'
import { loginByEmail } from '../services/loginByUsername/loginByEmail'

const initialState: LoginFormSchema = {
  isLoading: false,
  password: '',
  username: '',
}

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByEmail.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.isLoading = false
        if (typeof action.payload === 'string') {
          state.error = action.payload
        }
      })
  },
})

export const { actions: loginActions } = loginFormSlice
export const { reducer: loginReducer } = loginFormSlice
