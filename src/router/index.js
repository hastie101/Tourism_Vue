import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('../views/booking.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
      path: '/destination',
      name: 'destination',
      component: () => import('../views/destination.vue')
    },
    {
      path: '/package',
      name: 'package',
      component: () => import('../views/package.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/service.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/team.vue')
    },
    {
      path: '/testimonial',
      name: 'testimonial',
      component: () => import('../views/testimonial.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
