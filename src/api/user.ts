import http from '@/utils/http';

export const userLogin = (data: any) =>
  http({
    url: '/user/login',
    method: 'post',
    data,
  });
