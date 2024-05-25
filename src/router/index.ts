import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from '@a/router'
import patientRoutes from '@pa/router'
import professionalRoutes from '@pr/router'
import consumeApiRoutes from '@ca/router'

const routes = [
  // AUTH
  {
    ...authRoutes
  },
  // PATIENT
  {
    ...patientRoutes
  },
  // PROFESSIONAL
  {
    ...professionalRoutes
  },
  //Pokemon
  {
    ...consumeApiRoutes
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
