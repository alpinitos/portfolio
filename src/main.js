import Vue from 'vue'
import App from './App.vue'
import router from './vue/router'

Vue.config.productionTip = false

Vue.component('Nav-bar', require('./components/shared/navbar.vue').default)
Vue.component('Footer', require('./components/shared/footer.vue').default)
Vue.component('Home', require('./components/home.vue').default)
Vue.component('Contact', require('./components/shared/contact.vue').default)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
