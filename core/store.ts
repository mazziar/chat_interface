import { configureStore, } from '@reduxjs/toolkit';
import snackBarHandlerSlice from '@/core/features/snackBarHandlerSlice';
import settingSlice from './features/settingSlice';
import sessionSlice from '@/core/features/sessionSlice';
import { errorHandlerMidlewsare } from './errorHandlerMidlewsare';
import { setupListeners } from '@reduxjs/toolkit/query';
import { messagesApi } from '@/core/services/user/messagesApi';

export const store = configureStore({
  reducer: {
    snackBarHandlerSlice,
    settingSlice,
    sessionSlice,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat([
        messagesApi.middleware,
      ])
      .concat([errorHandlerMidlewsare]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
