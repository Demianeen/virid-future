import { rtkApi } from 'shared/api/rtkApi'

interface PredictApiResult {
  label: string
  recommendation: string
}

const predictApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    predict: builder.mutation<PredictApiResult, FormData>({
      query: (body) => ({
        url: '/uploader',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { usePredictMutation } = predictApi
