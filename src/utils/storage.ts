import cookie from 'js-cookie';

/**
 * token 的更新和获取
 * @param key
 */
export const getToken = (key: string) => cookie.get(key);
export const updateToken = (key: string, value: any) => cookie.set(key, value);
export const removeToken = (key: string) => cookie.remove(key);

/**
 * 历史搜索条件缓存
 * @param key
 */
export const getSearchHistory = (key: string) => cookie.getJSON(key);
export const updateSearchHistory = (key: string, json: any) =>
  cookie.set(key, json);
