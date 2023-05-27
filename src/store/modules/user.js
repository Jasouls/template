import { setLoginStatus, removeLoginStatus } from '@/utils/auth';
import { login, logout, getUserInfo } from '@/api/user';

const user = {
  state: {
    token: '',
  },
  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data;
      setLoginStatus(data);
    },
    REMOVE_TOKEN: (state) => {
      state.token = '';
      removeLoginStatus();
    },
    SET_USERINFO: (state, data) => {
      console.log(data);
    }
  },
  actions: {
    UserLogout({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('REMOVE_TOKEN');
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
      });
    },
    UserLogin({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data).then((res) => {
          commit('SET_TOKEN', res.data.token);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          commit('SET_USERINFO', res.data.user);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
  }
}

export default user;