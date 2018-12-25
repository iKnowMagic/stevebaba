import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/state/store'

import 'nprogress/nprogress.css'
import '@/scss/style.scss'

import vueSmoothScroll from 'vue-scrollto'
import VueMq from 'vue-mq'
import VueParallaxJs from 'vue-parallax-js'

Vue.use(vueSmoothScroll)
Vue.use(VueMq, {
  breakpoints: {
    xs: 450,
    sm: 768,
    md: 992,
    lg: 1200
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})
Vue.use(VueParallaxJs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
