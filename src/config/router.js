import { createRouter, createWebHistory } from "vue-router"

import HomePage from '../pages/index.vue'
import GalleryPage from '../pages/gallery.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/gallery', name: 'gallery', component: GalleryPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router