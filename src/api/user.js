import request from '@/utils/request';

/* 用户登录 */
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data,
  });
}

/* 用户登出 */
export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  });
}

/* 获取当前登录用户基本信息 */
export function getUserInfo() {
  return request({
    url: '/getInfo',
    method: 'get',
  });
}