import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components/theme/fonts/iconfont.css'
import './components/theme/index.scss'

import Button from './components/button/index'
import Scrollbar from './components/scrollbar/'
import Scrollbar2 from './components/scrollbar-element/'
import Popper from './components/popper/'
Vue.use(Button)
Vue.use(Scrollbar)
Vue.use(Scrollbar2)
Vue.use(Popper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
