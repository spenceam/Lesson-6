import { createRouter, createWebHistory } from 'vue-router'
import LinksView from '../views/LinksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LinksView,
    },
  ],
})

export default router
