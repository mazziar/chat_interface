import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import prepareHeaders from '../../../prepareHeaders';
import { cachedUrl } from '@/core/apiConfig';


export const messagesApi = createApi({
  reducerPath: 'MessagesApi',
  baseQuery: async (args, api, extra) =>
    fetchBaseQuery({ baseUrl: `${cachedUrl}/messages`, prepareHeaders })(args, api, extra),

  endpoints: (builder) => ({
    postMessage: builder.query<void, void>({
      query: () => ({
        url: '',
      }),
    }),

    getMessage: builder.mutation<void, void>({
      query: () => ({
        url: '',
      }),
    }),
  }),
});

export type { };
export const {
  useGetMessageMutation,
  usePostMessageQuery,
} = messagesApi;
