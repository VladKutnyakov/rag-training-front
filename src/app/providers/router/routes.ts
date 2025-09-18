import { EmptyLayout } from '@shared/ui/layouts'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@pages/home'),
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component: () => import('@pages/chat'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@pages/auth'),
    meta: {
      layout: EmptyLayout,
    },
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@pages/not-found'),
  },
]
