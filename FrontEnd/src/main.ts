import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

export const eventBus = new Vue()

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
