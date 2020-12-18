import http from '@/utils/http';

export const userLogin = (data: any) =>
  http({
    url: '/get',
    method: 'post',
    data,
  });
