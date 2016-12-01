import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import getters from './getters'
import user from './modules/user'


Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    user
  }
})

export default store