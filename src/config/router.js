import { createRouter, createWebHistory } from "vue-router"
import { IndexPage, GalleryPage } from '../pages/index'
import useAuth from '../composables/auth'

const { onAuth, userId } = useAuth()

const routes = [
  { 
    path: '/',
    name: 'index',
    component: IndexPage,
    beforeEnter: (async (to, from) => {
      await onAuth()
      if (userId) return '/gallery'
    })
  },
  { 
    path: '/gallery',
    name: 'gallery',
    component: GalleryPage,
    beforeEnter: (async (to, from) => {
      await onAuth()
      if (!userId) return '/'
    })
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router