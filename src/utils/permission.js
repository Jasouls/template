import store from '@/store';
import router from '@/router';
import { getLoginStatus } from '@/utils/auth';

router.beforeEach((to, from, next) => {
  const isToken = store.state.user.token || getLoginStatus();
  if (isToken) {
    if (to.path === '/login') {
      next();
    } else {
      if (!store.state.user.userName) {
        store.dispatch('GetUserInfo').then(() => {
          next();
        }).catch(() => {
          store.dispatch('UserLogout').then(() => {
            next();
          });
        });
      } else {
        next();
      }
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({ name: 'login' });
    }
  }
})