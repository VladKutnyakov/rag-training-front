export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@pages/home'),
  },
  {
    path: '/document/:id',
    name: 'document',
    component: () => import('@pages/home'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@pages/not-found'),
  },
]
