import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import stateMenuReducer from '../slices/stateMenuSlice';

export const store = configureStore({
  reducer: {
    state_menu: stateMenuReducer
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
