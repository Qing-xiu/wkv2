import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import routes from './routes'
import store from './store'
import api from './api'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  FastClick.attach(document.body)
})

const router = new VueRouter({
  routes,
  store
})

new Vue({
  
  router
}).$mount('#app')





