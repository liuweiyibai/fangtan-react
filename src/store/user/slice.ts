import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { IUserState, IUserForm } from './types';
import { AppThunk, AppDispatch } from '@/store';
import { userLogin as httpUserLogin } from '@/api/user';
import { Toast } from 'antd-mobile';

const initialState: IUserState = {
  token: '',
  userInfo: {},
  isPending: false,
};

/**
 * 参考地址1
 * https://redux-toolkit.js.org/tutorials/advanced-tutorial#logic-for-fetching-issues-for-a-repo
 *
 * 参考地址2
 * https://www.mattbutton.com/redux-made-easy-with-redux-toolkit-and-typescript/
 */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserState>) {
      state = { ...state, ...action.payload };
    },
    setPending(state, actions: PayloadAction<boolean>) {
      state.isPending = actions.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

/**
 * 异步请求
 * @param params
 */
export const loginIn = (params: IUserForm): AppThunk => async (
  dispatch: AppDispatch,
  // getState,
) => {
  // const state = getState().user;
  dispatch(userSlice.actions.setPending(true));
  try {
    const resp = await httpUserLogin(params);
    const { status, msg } = resp;
    if (status === 1) {
      const user: IUserState = {
        userInfo: {},
        token: '2222',
        isPending: false,
      };
      dispatch(userSlice.actions.setUser(user));
      /**
       * redux 中间键路由跳转
       * 参考地址
       * https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-set-router-props-eg-basename-initialentries-etc
       */
      dispatch(push('/'));
    } else {
      Toast.fail(msg || '用户名或密码错误!');
    }
  } catch (err) {
    Toast.fail(err.message || '用户名或密码错误!');
  } finally {
    dispatch(userSlice.actions.setPending(false));
  }
};

export default userSlice.reducer;
