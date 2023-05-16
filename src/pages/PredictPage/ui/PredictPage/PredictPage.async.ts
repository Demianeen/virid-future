import { lazy } from 'react'

export const PredictPageAsync = lazy(
  () => import('./PredictPage')
)
