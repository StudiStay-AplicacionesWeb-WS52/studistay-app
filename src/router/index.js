import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '@/rooms/pages/post-list.component.vue'
import LoginView from '@/security/pages/login/components/main-section.component.vue'
import RegisterView from '@/security/pages/register/components/main-section.component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },

    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    //rutas lazy load
    {
      path: '/post/:postId',
      name: 'postDetails',
      component: () => import('../rooms/pages/post-details.component.vue'),
    },
    {
      path: '/universities',
      name: 'universities',
      component: () => import('../rooms/pages/universities-list.component.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../rooms/pages/profile-view.component.vue')
    },
  ]
})

//verifica si el usuario esta autenticado para acceder a las rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user-token');
  const publicPages = ['/login', '/register']; //rutas que no requieren autenticación
  const authRequired = !publicPages.includes(to.path);

  //redirecciona a la pagina de login si no esta autenticado
  if (authRequired && !isAuthenticated) {
    return next('/login');
  }

  next();
});

export default router
