import 'mint-ui/lib/style.css'

import Vue from 'vue'
import './assets/base.css'

import App from './App.vue'
import axios from 'axios'
axios.defaults.baseURL = '/api/'
Vue.prototype.$axios = axios

import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
