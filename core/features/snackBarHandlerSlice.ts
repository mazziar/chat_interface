import { createSlice } from '@reduxjs/toolkit';

type SnackBarState = {
  open: boolean
  message: string;
  type?: 'success' | 'error' | 'warning'
};

const initialState = {
  open: false,
  message: '',
  type: undefined,
} as SnackBarState;

const snackBarHandlerSlice = createSlice({
  name: 'snackBarHandler',
  initialState,
  reducers: {
    openSnackBar: (state, action) => {
      state.open = true
      state.message = action.payload.message;
      state.type = action.payload.type;
    },

    clearSnackBar: () => initialState,
  },
});

export const { clearSnackBar, openSnackBar } =
  snackBarHandlerSlice.actions;
export default snackBarHandlerSlice.reducer;
