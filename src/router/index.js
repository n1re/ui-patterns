import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HoverSubmenu from '../views/HoverSubmenu.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/submenu-demo',
    name: 'About',
    component: HoverSubmenu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
