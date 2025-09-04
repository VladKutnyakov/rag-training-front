export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home'),
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component: () => import('@/pages/chat'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/not-found'),
  },
]
