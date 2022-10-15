import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
import jsondata from './jsondata.json'
import VueSnip from 'vue-snip'

Vue.use(VueCookies)
Vue.use(VueSnip)
Vue.config.productionTip = false
const baseURL = process.env.VUE_APP_PATH_API
if (typeof baseURL !== 'undefined') {
  axios.defaults.baseURL = baseURL
}
axios.interceptors.response.use((response) => {
  return response
}, error => {
  if (error.response.status == 401) {
    store.commit('SET_ISSIGNED', '')
    Vue.$cookies.set('Token', '')
    if (Vue.$cookies.get('RefreshToken')) {
      let filter = {
        code: Vue.$cookies.get('RefreshToken'),
        redirect_uri: process.env.VUE_APP_PATH_REDIRECT_SSO
      }
      store.dispatch('getRefreshTokenKeyCloak', filter).then(rs => {
        Vue.$cookies.set('Token', rs.accessToken, rs.expires_in)
        Vue.$cookies.set('RefreshToken', rs.refreshToken, rs.refresh_expires_in)
        axios.defaults.headers['Authorization'] = 'Bearer ' + rs.accessToken
        toastr.remove()
        toastr.error('Thao tác thất bại. Vui lòng thử lại.')
      }).catch(function () {
        router.push({ path: '/dang-nhap' })
      })
    } else {
      router.push({ path: '/dang-nhap' })
    }
  }
  if (error.response) {
      return parseError(error.response.data)
  } else {
      return Promise.reject(error)
  }
})

if (Vue.$cookies.get('Token')) {
  store.commit('SET_ISSIGNED', true)
  axios.defaults.headers['Authorization'] = 'Bearer ' + Vue.$cookies.get('Token')
} else {
  store.commit('SET_ISSIGNED', false)
  localStorage.setItem('user', null)
  // test local
  // axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0cDVSM3lITmU3cWhqS05SaUpOei1oOHZIZFppcVh5dXNILWprM0Y3QnBvIn0.eyJleHAiOjE2NTk5MzUzMjMsImlhdCI6MTY1OTkzMTcyNSwiYXV0aF90aW1lIjoxNjU5OTMxNzIzLCJqdGkiOiI0OTUzMWEyOC01ZmYxLTQ3YzktOWE5YS0wZWYzZDczZDU4Y2MiLCJpc3MiOiJodHRwczovL3NzbzIuZG9uZ3RoYXAuZ292LnZuL3JlYWxtcy9ESFROIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImE1MzU3NDFhLWNkY2MtNDM0Ny04ZDk5LTg0YjYxMWFiNDM3NiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImZsZXgtc3NvIiwic2Vzc2lvbl9zdGF0ZSI6IjVkYjkyODNlLTI4OTMtNGE0Mi1hNjRjLWM5Nzk0ZWNjOGU0ZSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiT3JnYW5pemF0aW9uIiwidXNlci1tYW5hZ2VtZW50IiwiQ2l0aXplbiIsImRlZmF1bHQtbWVtYmVyIiwiRW1wbG95ZWUiLCJBZG1pbmlzdHJhdG9yIiwic2l0ZS1hZG1pbiIsImFjY291bnQtbWFuYWdlbWVudCIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJjYXRlZ29yaWVzLW1hbmFnZW1lbnQiLCJkZWZhdWx0LXJvbGVzLURIVE4iLCJCdXNpbmVzcyJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCBjLWRhdGEgc2l0ZS1hZG1pbiB0LWRhdGEiLCJzaWQiOiI1ZGI5MjgzZS0yODkzLTRhNDItYTY0Yy1jOTc5NGVjYzhlNGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJBZG1pbiBGRFMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImdpdmVuX25hbWUiOiJBZG1pbiIsImZhbWlseV9uYW1lIjoiRkRTIiwiZW1haWwiOiJhZG1pbkBmZHMudm4ifQ.eHEeG9TQmr-OhCS6BY1lSQ2q3f1w9C6G30o-j50_N9q5nFNjGRM0mZhFLz5ApvoesZtHL9fzeiJEc27FQzH5YcN9FWnuVL2UJ5kmn23u0JEySf_C8PuqwvOhM8T1q0HKusjgi-yq0GiLKYFEelB_XHL91LwTOfdxH92ZVddOJDpDrzGOa0tIOEVGM1oGWcLbBhmfS6qD-sd-NeVbiwBP38abcgTomwPgxbolc8zd4GLLf5tzMPPeDe_iXdWouqYtI0VbUvLmvO0THGMtRV1371fDgrYyupq0cneb5k2jf9yxyXiHo-GdYLDqqtgHt-A7OCE2djgR__Ua9UpvM4rNfw'
}
Vue.mixin({
  data: () => ({
    dataLocal: jsondata
  }),
  methods: {
    checkRole (role) {
      let vm = this
      let roleUser = vm.$cookies.get('Roles', '')
      if (!role || !roleUser) {
        return false
      }
      let roles = roleUser.split(',')
      let exits = roles.find(function (item) {
        return item == role
      })
      if (exits) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    groupId () {
      return this.$cookies.get('groupId', '')
    },
    userId () {
      return this.$cookies.get('userId', '')
    },
    isAdmin () {
      return this.$cookies.get('admin', '')
    },
    userLogin () {
      let userInfo = ''
      try {
        userInfo = JSON.parse(localStorage.getItem('user'))
      } catch (error) {
      }
      return userInfo
    },
    isMobile () {
      let breakpointName = this.$store.getters.getBreakpointName
      return breakpointName === 'xs' || breakpointName === 'sm' ? true : false
    }
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
