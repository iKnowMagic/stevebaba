import Vue from 'vue'
import NProgress from 'nprogress'
import Router from 'vue-router'
import routes from '@/router/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: routes,

  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeResolve(async (routeTo, routeFrom, next) => {
  if (routeTo.name) {
    // route progress bar
    NProgress.start()
  }
  next()
})

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
