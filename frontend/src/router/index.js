import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import VenueView from '@/views/VenueView.vue'
import ScreeningDetails from '@/views/ScreeningView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/venue/:id',
      name: 'venue',
      component: VenueView,
      props: true
    },
    {
      path: '/venue/:venueId/screening/:screeningId',
      name: 'screening',
      component: ScreeningDetails,
      props: true
    }
  ],
})

export default router
