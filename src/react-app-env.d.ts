/// <reference types="react-scripts" />
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
// declare module 'whatwg-fetch';
declare namespace Ajax {
  // // axios 返回数据
  // export interface AxiosResponse<T> {
  //   data: AjaxResponse<T>;
  // }

  // 请求接口数据
  export interface AjaxResponse<T = any> {
    code?: number;
    data: T;
    message?: string;
    errorCode?: number | string;
  }
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}
