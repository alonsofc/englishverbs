import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/regular',
    name: 'regular',
    component: () => import(/* webpackChunkName: "regular" */ '../views/RegularView.vue')
  },
  {
    path: '/irregular',
    name: 'irregular',
    component: () => import(/* webpackChunkName: "irregular" */ '../views/IrregularView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router