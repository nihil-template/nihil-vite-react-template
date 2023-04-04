import { configureStore } from '@reduxjs/toolkit';
import TestReducer from '@/reducers/TestReducer';

export const store = configureStore({
  reducer: {
    test: TestReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
