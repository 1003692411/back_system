import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/contain.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://qgzx.scau.edu.cn:8070/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
