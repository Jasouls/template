import store from '@/store';
import router from '@/router';
import { getLoginStatus } from '@/utils/auth';

router.beforeEach((to, from, next) => {
  const isToken = store.state.user.token || getLoginStatus();
  if (isToken) {
    next();
  } else {
    next({name: 'login'});
  }
})