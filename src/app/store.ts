import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { patternReducer } from '../features/pattern';

export const store = configureStore({
  reducer: {
    pattern: patternReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
