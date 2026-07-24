import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { openSnackBar } from './features/snackBarHandlerSlice';

export const errorHandlerMidlewsare: Middleware =
  ({ dispatch }) =>
    (next) =>
      (action) => {
        // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
        if (isRejectedWithValue(action)) {
          const statusCode = action.meta; // Assuming you store the status code in the action's meta
          //@ts-ignore
        }

        return next(action);
      };
