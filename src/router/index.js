import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductPage from '@/views/ProductPage'
import ProductComponent from '@/views/ProductComponent'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'products',
    component: ProductPage
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
