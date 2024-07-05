import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetailView from '../views/BlogDetailsView.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog-detail',
    name: 'blog_detail',
    component: BlogDetailView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  // Add more routes as needed...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
