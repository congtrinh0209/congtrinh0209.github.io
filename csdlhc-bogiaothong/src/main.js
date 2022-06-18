import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
import jsondata from './jsondata.json'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}

Vue.use(VueCookies)
Vue.config.productionTip = false
const baseURL = process.env.VUE_APP_PATH_API
if (typeof baseURL !== 'undefined') {
  axios.defaults.baseURL = baseURL
}
axios.interceptors.response.use((response) => {
  // console.log('response', response)
  return response
}, error => {
  // console.warn('Error status 123', error.response)
  if (error.response.status == 401) {
    store.commit('SET_ISSIGNED', '')
    Vue.$cookies.set('Token', '')
    if (Vue.$cookies.get('RefreshToken')) {
      let filter = {
        code: Vue.$cookies.get('RefreshToken'),
        redirect_uri: process.env.VUE_APP_PATH_REDIRECT_SSO
      }
      store.dispatch('getRefreshTokenKeyCloak', filter).then(rs => {
        Vue.$cookies.set('Token', rs.access_token, rs.expires_in)
        Vue.$cookies.set('RefreshToken', rs.refresh_token, rs.refresh_expires_in)
        axios.defaults.headers['Authorization'] = 'Bearer ' + rs.access_token
        toastr.remove()
        toastr.error('Thao tác thất bại. Vui lòng thử lại.')
      }).catch(function () {
        // router.push({ path: '/login' })
        store.dispatch('logoutKeyCloak').then(function (result) {
          let redirect_uri = process.env.VUE_APP_PATH_REDIRECT_SSO
          window.location.href = result.endpoint + '?redirect_uri='+ redirect_uri
        }).catch(function () {
          router.push({ path: '/login' })
        })
      })
    } else {
      store.dispatch('logoutKeyCloak').then(function (result) {
        let redirect_uri = process.env.VUE_APP_PATH_REDIRECT_SSO
        window.location.href = result.endpoint + '?redirect_uri='+ redirect_uri
      }).catch(function () {
        router.push({ path: '/login' })
      })
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
  // axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkV0FtSTZHbmVHN25zcWxOeV9oejlzOWc2Y2tBZHJJSXVMMlhMcWJScmNFIn0.eyJleHAiOjE2NDY5Mzc0MzQsImlhdCI6MTY0NjkzMzgzNCwiYXV0aF90aW1lIjoxNjQ2OTMzODMxLCJqdGkiOiIxM2M5ZjdjZS1jYjZmLTQyNDgtOGFlYy1hNWU3NTU4YzA3ZGQiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLmZkcy52bi9hdXRoL3JlYWxtcy9mbGV4LWRhdGEtaGctcWEiLCJhdWQiOiJyZWFsbS1tYW5hZ2VtZW50Iiwic3ViIjoiZjM1NTExOTYtMmNlNS00M2RiLWJiMTctYjFiMWRiMWJlNTg4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZmxleC1zc28iLCJzZXNzaW9uX3N0YXRlIjoiMTM0ZjY2YzQtNjFhNi00NzI2LThmZTEtNTI1MzU3MGMyODg4IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LW1lbWJlciIsInNpdGUtYWRtaW4iLCJ1c2VyLW1hbmFnZW1lbnQiLCJhY2NvdW50LW1hbmFnZW1lbnQiLCJjYXRlZ29yaWVzLW1hbmFnZW1lbnQiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbIm1hbmFnZS11c2VycyJdfX0sInNjb3BlIjoidC1kYXRhIHByb2ZpbGUgYy1kYXRhIGVtYWlsIHNpdGUtYWRtaW4iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJGRFMgQWRtaW4gU3VwcGVyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiRkRTIEFkbWluIiwiZmFtaWx5X25hbWUiOiJTdXBwZXIiLCJlbWFpbCI6ImFkbWluQGZkcy52biJ9.XsMxyzujFaR96BL5Rw8LD4Wv6CGewKC7VCnxCbaOJ_p_q8WZOgzsoNjDQij6cG3eGylI5HArIK0mAXb9gtMgexnDixsf9Smqe0pFhNfJJGnmTys1AjHDl2gXhZOOWEkP43q1EzNEiX4h00kJKlN7QFW16F-GtmJ8mBpMUQyqfmk8f9HXkIdiSnZ7cTX132IJsXvYmlTQ2iU1J3W3uo1QkIognjR-TjtFzpouKS4opuLQ2noAaRLGxnH7KsFGdDAdZyRyyPDqvZaSEOWKf3OiYC4pBUtdApdd1lbiJjnb53t0Zk2Mj0-Ri9UCBGHlTThKqksfrCmx8h1HkkzLYpzSvA'
}
Vue.mixin({
  data: () => ({
    mockData: jsondata
  }),
  methods: {
  },
  computed: {
    isSigned () {
      return this.$store.getters.getIsSigned
    },
    userLogin () {
      let userInfo = ''
      try {
        userInfo = JSON.parse(localStorage.getItem('user'))
      } catch (error) {
      }
      return userInfo
    }
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
