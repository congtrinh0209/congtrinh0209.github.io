import { createApp, inject } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'

import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()

axios.interceptors.response.use((response) => {
  return response.data
}, async (error) => {
  if (error.response.status == 401) {
  } else {
    return Promise.reject(error)
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app-quanlynhansu')
