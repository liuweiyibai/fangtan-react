import { userLogin as httpUserLogin } from '@/api/user';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';

function userActionCreater(payload: any) {
  return {
    type: UPDATE_TOKEN,
    payload,
  };
}

/**
 * 返回 promise
 * @param params
 */
export function userLogin(params: any): Promise<void> {
  return new Promise((resolve) => {
    httpUserLogin(params).then((resp: Ajax.AjaxResponse) => {
      if (resp.code === 200) {
      }
    });
  });
}
