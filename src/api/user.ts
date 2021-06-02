import http from '@/utils/http';
import { Method } from 'axios';
interface RequestParams {
  url: string;
  method: Method;
  data?: any;
  params?: any;
}

export const userLogin = <R = {}>(data: any) => {
  // !get 和 post 的传参方式记得看函数签名
  let params: RequestParams = {
    url: '/user/login',
    method: 'post',
    data,
  };
  userLogin.prototype.cancel = (params: RequestParams) => {
    console.log('====================================');
    console.log(params);
    console.log('====================================');
  };
  return http<R>(params);
};

export const getMe = <R = {}>() => http<R>({ url: '/user/me' });

export const getUserList = <R = []>(params: any) =>
  http<R>({
    method: 'get',
    url: '/user/list',
    params,
  });

export const deleteUser = <R = {}>(id: string) =>
  http<R>({
    method: 'delete',
    url: `/user/delete/${id}`,
  });

export const updateUser = <R = {}>(data: any) =>
  http<R>({
    method: 'put',
    url: '/user/update',
    data,
  });
