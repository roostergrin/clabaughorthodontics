// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/app'
import router from './router'
import store from './shared/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* eslint-disable */
import Components from './resources/components'
import { vendors } from './resources/vendors'
import { fonts } from './resources/fonts'
/* eslint-enable */

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.directive('load-video', {
  bind (el) {
    el.addEventListener('loadeddata', (e) => {
      store.dispatch('LOADING', false)
    }, false)
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
