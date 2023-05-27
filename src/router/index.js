import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/views/HomeLayout'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/',
    component: HomeLayout,
    redirect: { name: 'home' },
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/components/home/index.vue'),
    }],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
