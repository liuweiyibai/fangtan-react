import {
  userLogin as httpUserLogin,
  getUserList,
  updateUser,
} from '@/api/user';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';

interface IUser {
  username: string;
  age: number;
  created: string;
  [key: string]: any;
}

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
export async function userLogin(params: any) {
  // 接口调用方式
  const resp = await httpUserLogin<IUser>(params);
  if (resp.code === 200) {
    console.log('====================================');
    console.log(resp.data.username);
    console.log('====================================');
  }
}

getUserList<IUser[]>({ ...{ a: 1 } }).then((resp) => {
  console.log('====================================');
  console.log(resp);
  console.log('====================================');
  // resp.data.forEach((t) => {
  // t.created
  // });
});

async function main() {
  const resp = await updateUser({});
  console.log('====================================');
  console.log();
  console.log('====================================');
}
