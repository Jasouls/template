import axios from 'axios';
import router from '@/router';
import store from '@/store';
import { getLoginStatus } from '@/utils/auth';

const service = axios.create({
  baseURL: '', // api的_url
  timeout: 1000 * 60 * 5, // request timeout
});

service.interceptors.request.use((config) => {
  const token = store.state.user.token || getLoginStatus();
  const isToken = (config.headers || {}).isToken === false;
  if (token && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + token; // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, (err) => {
  Promise.reject(err);
});

service.interceptors.response.use((res) => {
  if (res.status === 200) {
    return Promise.reject(res);
  } else {
    return Promise.reject(res);
  }
}, (err) => {
  if (err.response.status === 401) {
    store.dispatch('UserLogout').then(() => {
      router.push({ name: 'login' });
    });
  }
  return Promise.reject(err.response);
});

export default service;
