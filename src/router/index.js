import Vue from 'vue'
import VueRouter from 'vue-router'
import StyleGuide from 'pages/style-guide/style-guide'
// import PageNotFound from 'pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'
import store from '@/shared/store/index'

const Home = () => import('@/pages/home/home')
const HomeCare = () => import('@/pages/home-care/home-care')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: true,
      component: Home
    },
    {
      path: '/home-care',
      name: 'Home Care',
      navigation: true,
      component: HomeCare,
      beforeEnter: (to, from, next) => {
        store.dispatch('LOADING', false)
        next()
      }
    },
    {
      path: '/style-guide',
      name: 'style guide',
      navigation: false,
      component: StyleGuide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: Home
    }
  ],
  scrollBehavior
})

router.beforeResolve((to, from, next) => {
  /* eslint-disable */
  if (to.hash === "") {
    /* eslint-enable */
    window.scrollTo(0, 0)
  }
  next()
})

export default router
