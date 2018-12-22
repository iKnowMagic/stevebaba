import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/state/store'

import 'nprogress/nprogress.css'
import '@/scss/style.scss'

import vueSmoothScroll from 'vue-scrollto'

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
