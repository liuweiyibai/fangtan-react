import { Toast } from 'antd-mobile';

import { AppThunk } from '../index';
import { updateSystem } from './slice';
import { SystemState } from './types';
import { userLogin } from '@/api/user';

export const fetchUserLogin = (params: any): AppThunk => async (dispatch) => {
  try {
    const resp: Ajax.AjaxResponse<any> = await userLogin(params);
    const { data, code } = resp;
    if (code !== 200) {
      return Promise.reject(resp.message || '用户名或密码错误！');
    }
    const { token } = data;
    const user: SystemState = {
      loggedIn: true,
      token: token,
      userName: 'hhhh',
    };
    return dispatch(updateSystem(user));
  } catch (err) {
    return Promise.reject(err.message || '用户名或密码错误！');
  }
};
