// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Users from './components/Users'
import Test from './components/Test'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', component: Users
    },
    {
      path: '/test', component: Test
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <b-navbar type="dark" variant="primary" toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav>
            <b-nav-item href="/">Users</b-nav-item>
            <b-nav-item href="/test">Test</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
