import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Aboutme from '../components/Aboutme.vue'
import Contact from '../components/Contact.vue'
import Mywork from '../components/Mywork.vue'
import Skills from '../components/Skills.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Aboutme',
    name: 'about',
    component: Aboutme
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
    
  },
  {
    path: '/mywork',
    name: 'mywork',
    component: Mywork,
    
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
