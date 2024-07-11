import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetailView from '../views/BlogDetailsView.vue'
import BlogView from '../views/BlogView.vue'
import ProjectView from '../views/ProjectView.vue'

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
  {
    path: '/pages',
    name: 'pages',
    component: BlogView
  },
  {
    path: '/services',
    name: 'services',
    component: BlogView
  },
  {
    path: '/contact',
    name: 'contact',
    component: BlogView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  // Add more routes as needed...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
