import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee,faInfoCircle,faDesktop, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faCoffee,faInfoCircle,faDesktop,faGraduationCap, faCode)

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
