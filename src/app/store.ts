import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import stateMenuReducer from '../slices/stateMenuSlice';
import stateNotificationSlice from '../slices/stateNotificationSlice';

export const store = configureStore({
  reducer: {
    state_menu: stateMenuReducer,
    notification: stateNotificationSlice
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
