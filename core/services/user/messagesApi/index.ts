import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import prepareHeaders from '../../../prepareHeaders';
import { cachedUrl } from '@/core/apiConfig';
import type { Message, GetMessagesParams, PostMessageBody } from './MessagesApi';

export const messagesApi = createApi({
  reducerPath: 'MessagesApi',
  baseQuery: async (args, api, extra) =>
    fetchBaseQuery({ baseUrl: `${cachedUrl}/api/v1/messages`, prepareHeaders })(args, api, extra),
  tagTypes: ['Messages'],

  endpoints: (builder) => ({
    getMessages: builder.query<Message[], GetMessagesParams | void>({
      query: (params) => ({
        url: '',
        params: params ?? undefined,
      }),
      providesTags: ['Messages'],
    }),

    postMessage: builder.mutation<Message, PostMessageBody>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
});

export type { };
export const {
  useGetMessagesQuery,
  usePostMessageMutation,
} = messagesApi;
