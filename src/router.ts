import { createRouter, createWebHistory } from 'vue-router'
import TheSignInPage from '@/pages/TheSignInPage.vue'
import TheOutsidePage from '@/pages/TheOutsidePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheSignInPage
  },
  {
    path: '/after-sign-in',
    name: 'следующей за успешной авторизацией',
    component: TheOutsidePage
  },
  {
    path: '/sign-up',
    name: 'регистрации',
    component: TheOutsidePage
  },
  { path: '/:pathMatch(.*)*', component: TheOutsidePage }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
