// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SmartTable from 'vuejs-smart-table'
import "./assets/css/app.css"
import "./assets/icons/fontawesome/css/all.min.css"

Vue.config.productionTip = false
Vue.use(SmartTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
