import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './packages/theme/fonts/iconfont.css'
import Button from './packages/button/index'
import Scrollbar from './packages/scrollbar/'
Vue.use(Button)
Vue.use(Scrollbar)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
