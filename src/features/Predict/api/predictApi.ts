import { rtkApi } from 'shared/api/rtkApi'

const predictApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    predict: builder.mutation<string, File>({
      query: (file) => ({
        url: '/uploader',
        method: 'POST',
        body: {
          file,
        },
      }),
    }),
  }),
})

export const { usePredictMutation } = predictApi
