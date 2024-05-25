import type { RouteRecordRaw } from 'vue-router'

// import historyRoutes from '@ca/router'
// import userRoutes from '@ca/router'

const routes: RouteRecordRaw = {
  path: '/',
  name: 'pokemon',
  redirect: { name: 'pokemon-home' },

  component: () => import('@ca/layout/Layout.vue'),
  children: [
    {
      path: '/pokemon',
      name: 'pokemon-home',
      component: () => import('@ca/views/HomeConsumeApiView.vue')
    }
    // ...historyRoutes,
    // ...userRoutes
  ]
}

export default routes
