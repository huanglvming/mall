// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import utils from './assets/js/utils.js'

const https = axios.create({
	baseURL: 'https://apinyx.chuangshangapp.com/',
	headers:{
		ticket:  utils.request('ticket'),
	}
});
Vue.prototype.$axios = https;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
