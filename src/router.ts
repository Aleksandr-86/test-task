import { createRouter, createWebHistory } from 'vue-router'
import TheSignInPage from '@/pages/TheSignInPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheSignInPage
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
