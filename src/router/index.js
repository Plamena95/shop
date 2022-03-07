import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contacts from '../views/contacts.vue'
import AboutView from '../views/AboutView.vue'
import Item from '../views/Item.vue'
//import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Homeview',
    component: HomeView,
    
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: contacts
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/home/:id',
    name: 'Item',
    component: Item
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
