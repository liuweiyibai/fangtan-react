import { combineReducers } from '@reduxjs/toolkit';
import systemReducer from './system/slice';

export const rootReducer = combineReducers({
  system: systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
