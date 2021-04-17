import Vue from 'vue'
import App from './App.vue'
import router from './vue/router'

Vue.config.productionTip = false

Vue.component('Nav-bar', require('./components/navbar.vue').default)
Vue.component('Footer', require('./components/footer.vue').default)
Vue.component('Home', require('./components/home.vue').default)
Vue.component('Mision', require('./components/mandv.vue').default)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
