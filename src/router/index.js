import { createRouter, createWebHistory } from 'vue-router'
import TrendingView from '../views/TrendingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'trending',
      component: TrendingView
    },
    {
      path: '/recent',
      name: 'recent',
      component: () => import('../views/RecentView.vue')
    },
    {
      path: '/best',
      name: 'best',
      component: () => import('../views/BestView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    }
    // Rute untuk user belum ditambahkan karena membutuhkan input username dari suatu tempat
    // Kita bisa menambahkannya nanti jika ada fitur untuk melihat profil user
  ]
})

export default router
