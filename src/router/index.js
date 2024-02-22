import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/Form.vue'),
      meta: {
        isAuthRequired: true
      }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users.vue')
    },
    {
      path: '/female-users',
      name: 'femaleUsers',
      component: () => import('../views/FemaleUsers.vue')
    },
    {
      path: '/user-detail/:id',
      name: 'userDetail',
      component: () => import('../views/UserDetail.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
