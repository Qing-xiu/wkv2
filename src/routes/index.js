import App from './app.vue'
import ProductInfo from './product/info.vue'

export default [
  {path: '/', component: App},
  {path: '/product/:id', component: ProductInfo},
]