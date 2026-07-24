import { createSlice } from '@reduxjs/toolkit';

type SessionType = {
  token: string;
};

const initialState = {
  token:
    typeof window !== 'undefined' ? window.localStorage.getItem('auth-token') : '',
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
  },
});

export const {
  reset,
  setToken,
  removeToken,
} = Session.actions;
export default Session.reducer;
