import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('../../components/home.vue'),
    meta: {title: 'Regniek | Inicio'},
    children:[
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('../../components/pages/projects.vue'),
        meta: {title: 'Regniek | Projects'},
      },
      {
        path: 'experience',
        name: 'Experience',
        component: () => import('../../components/pages/experience.vue'),
        meta: {title: 'Regniek | Experience'},
      },
      {
        path: '',
        name: 'Container',
        component: () => import('../../components/pages/container.vue'),
        meta: {title: 'Regniek | Inicio'},
      },
      {
        path: 'aboutme',
        name: 'AboutMe',
        component: () => import('../../components/pages/aboutme.vue'),
        meta: {title: 'Regniek | About me'},
      },
      {
        path: 'contactme',
        name: 'ContactMe',
        component: () => import('../../components/shared/contact.vue'),
        meta: {title: 'Regniek | Contact me'},
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: "nav-item_mobile_Active",
})

export default router
