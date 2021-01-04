import http from '@/utils/http';

export const userLogin = <R = {}>(data: any) =>
  // !get 和 post 的传参方式记得看函数签名
  http<R>({
    url: '/user/login',
    method: 'post',
    data,
  });

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
