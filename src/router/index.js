import Vue from 'vue'
import App from '../App';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect:'/mrblock'},
  {path: '/mrblock', component: App}
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
