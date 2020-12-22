import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SystemState } from './types';

const initialState: SystemState = {
  loggedIn: false,
  token: '',
  userName: '',
};

/**
 * 参考地址
 * https://redux-toolkit.js.org/tutorials/advanced-tutorial#logic-for-fetching-issues-for-a-repo
 */
const system = createSlice({
  name: 'system',
  initialState: initialState,
  reducers: {
    updateSystem(state, { payload }: PayloadAction<SystemState>) {
      return { ...state, ...payload };
    },
  },
});

export const { updateSystem } = system.actions;

export default system.reducer;
