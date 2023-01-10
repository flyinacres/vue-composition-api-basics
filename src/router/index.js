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
      path: '/post',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (Post.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      // route level code-splitting
      // this generates a separate chunk (Post.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostDetailView.vue')
    }
  ]
})

export default router
