import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Details from '../pages/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/home'
  	},
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})
