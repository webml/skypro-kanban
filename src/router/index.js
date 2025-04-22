import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'log-out',
          component: () => import('@/views/LogOutView.vue'),
        },
        {
          path: 'task/add',
          component: () => import('@/views/CreateTaskView.vue'),
        },
        {
          path: 'task/:id',
          component: () => import('@/views/TaskView.vue'),
        },
        {
          path: 'task/:id/edit',
          component: () => import('@/views/EditTaskView.vue'),
        },
      ],
      meta: {
        requiresAuth: true, // Главная страница требует авторизации
      },
    },
    {
      path: '/sign-in',
      component: SignUpView, // Отдельный компонент для регистрации
    },
    {
      path: '/log-in', // Маршрут для страницы входа
      component: LogInView,
    },
    {
      path: '/404',
      component: NotFoundView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

router.beforeEach((to, from, next) => {
  // Берем токен
  const token = localStorage.getItem('userInfo')

  // Проверяем, действительно ли на маршруте нужна авторизация и есть ли токен
  if (to.meta.requiresAuth && !token) {
    next('/log-in') // Если нет, уводим на страницу входа
  } else {
    next() // Иначе пропускаем пользователя
  }
})

export default router
