import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './packages/theme/fonts/iconfont.css'
import './packages/theme/index.scss'
import Button from './packages/button/index'
import Scrollbar from './packages/scrollbar/'
import Scrollbar2 from './packages/scrollbar-element/'
Vue.use(Button)
Vue.use(Scrollbar)
Vue.use(Scrollbar2)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
