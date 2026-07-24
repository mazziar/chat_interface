'use client'

import { createSlice } from '@reduxjs/toolkit';

type AppSetting = {
  darkTheme: string;
};

const initialState = {
  darkTheme: typeof window !== 'undefined' && window.localStorage.getItem('dark-theme') || '',
} as AppSetting;

export const appSetting = createSlice({
  name: 'appSetting',
  initialState: {
    darkTheme: typeof window !== 'undefined' && window.localStorage.getItem('dark-theme') || '',
    redirectTo: typeof window !== 'undefined' && window.localStorage.getItem('redirect-to') || '/dashboard',
  } as AppSetting,
  reducers: {
    reset: () => initialState,

    changeTheme: (state) => {
      typeof window !== 'undefined' && state.darkTheme === 'ok'
        ? window.localStorage.setItem('dark-theme', '')
        : window.localStorage.setItem('dark-theme', 'ok');
      state.darkTheme === 'ok'
        ? (state.darkTheme = '')
        : (state.darkTheme = 'ok');
    },

    removeRedirectTo: (state) => {
      typeof window !== 'undefined' && window.localStorage.removeItem('redirect-to')

      state.darkTheme = 'dashboard';
    },

    setTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});

export const { reset, changeTheme, setTheme, removeRedirectTo } = appSetting.actions;
export default appSetting.reducer;
