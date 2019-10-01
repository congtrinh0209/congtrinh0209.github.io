
import Vue from 'vue'
import router from './router'
import App from './App'
import Vuetify from 'vuetify/lib'
import { plugin } from "vue-function-api"
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(plugin)

const opts = {}

export default new Vuetify(opts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
