import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import admin from '@/backend/admin.vue'
import login from '@/auth/login'
import signup from '@/auth/signup'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    // children:[
    //   {
    //
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'login',
    component: login,

  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
