import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('../../components/home.vue'),
    meta: {title: 'Inicio'},
    children:[
      {
        path: 'productos',
        name: 'Products',
        component: () => import('../../components/products.vue'),
        meta: {title: 'Inicio'},
      },
      {
        path: 'servicios',
        name: 'Services',
        component: () => import('../../components/services.vue'),
        meta: {title: 'Inicio'},
      },
      {
        path: '',
        name: 'Landing',
        component: () => import('../../components/landing.vue'),
        meta: {title: 'Inicio'},
      },
      {
        path: 'contactanos',
        name: 'AboutMe',
        component: () => import('../../components/contact.vue'),
        meta: {title: 'Acerca de'},
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
