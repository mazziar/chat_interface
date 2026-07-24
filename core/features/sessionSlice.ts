import { createSlice } from '@reduxjs/toolkit';

type SessionType = {
  token: string;
  name: string;
};

const initialState = {
  token:
    typeof window !== 'undefined' ? window.localStorage.getItem('auth-token') : '',
  name:
    typeof window !== 'undefined' ? window.localStorage.getItem('user-name') : '',
} as SessionType;

export const Session = createSlice({
  name: 'session',
  initialState,
  reducers: {
    reset: () => initialState,
    setToken: (state, action) => {
      state.token = action.payload;
      window.localStorage.setItem('auth-token', action.payload);
    },
    removeToken: (state) => {
      state.token = '';
      window.localStorage.removeItem('auth-token');
    },
    setName: (state, action) => {
      state.name = action.payload;
      window.localStorage.setItem('user-name', action.payload);
    },
    removeName: (state) => {
      state.name = '';
      window.localStorage.removeItem('user-name');
    },
  },
});

export const {
  reset,
  setToken,
  removeToken,
  setName,
  removeName,
} = Session.actions;
export default Session.reducer;
