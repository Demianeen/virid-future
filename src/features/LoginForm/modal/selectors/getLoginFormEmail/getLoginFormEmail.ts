import { createSelector } from '@reduxjs/toolkit'
import { getLoginFormState } from '../getLoginFormState/getLoginFormState'

export const getLoginFormEmail = createSelector(
  getLoginFormState,
  (state) => state?.username ?? ''
)
