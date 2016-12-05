import Vue from 'vue'
import Tips from './index.vue'

export default (msg, duration = 1500) => {
  const VM = Vue.extend(Tips)
  const vm = new VM({
    propsData: {
      msg,
      duration
    }
  }).$mount()
  document.body.appendChild(vm.$el)
  return vm
}
