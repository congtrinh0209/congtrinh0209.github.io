import { createApp, inject } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import toastr from 'toastr'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'toastr/build/toastr.css'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
import { createVuetify } from 'vuetify'
import * as labs from 'vuetify/labs/components'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()
const vuetify = createVuetify({
  components: {
    ...components, ...labs
  },
  directives,
  icons: {
    defaultSet: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: import.meta.env.VITE_APP_BASE_COLOR
      },
    },
  },
})
import './assets/main.css'
import './assets/overrides.scss'

const baseURL = import.meta.env.VITE_APP_PATH_API
if (typeof baseURL !== 'undefined') {
  axios.defaults.baseURL = baseURL
}
axios.interceptors.response.use((response) => {
  return response
}, error => {
  if (error.response.status == 401) {
    cookies.set('Token', '')
    if (cookies.get('RefreshToken')) {
    } else {
    }
  }
  if (error.response) {
    return parseError(error.response.data)
  } else {
    return Promise.reject(error)
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
