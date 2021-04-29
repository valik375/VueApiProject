import { createRouter, createWebHistory, linkActiveClass } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import('../views/UserDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
