import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '../rooms/pages/post-list.component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts'
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    //rutas lazy load
    {
      path: '/universities',
      name: 'universities',
      component: () => import('../rooms/pages/universities-list.component.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../rooms/pages/profile-view.component.vue')
    }
  ]
})

export default router
