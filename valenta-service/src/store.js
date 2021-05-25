import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    snackbar: {
      show: false,
      text: '',
      color: '',
    },
    drawer: null,
    access_token: null,
    username: 'admin',
    userPermistion: 'guest',
    userProfile: null
  },
  getters: {
    getSnackbar: (state) => {
      return state.snackbar
    },
    getAccessToken: (state) => {
      return state.access_token
    },
    getUsername: (state) => state.username,
    getPermistion: (state) => state.userPermistion,
    getUserProfile: (state) => state.userProfile
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_LOGIN(state, { access_token, expires_in }) {
      state.access_token = access_token
      state.expires_in = expires_in
    },
    SET_ACCESS_TOKEN(state, token) {
      state.access_token = token
    },
    SET_USER_PERMISTION(state, permistion) {
      state.userPermistion = permistion
    },
    SET_LOGIN_PROFILE(state, payload) {
      if (payload) {
        state.username = payload.displayName
        state.userProfile = payload
      } else {
        state.username = ''
        state.userProfile = {}
      }
    },
    SHOW_SNACKBAR(state, { color, text }) {
      state.snackbar.show = true
      state.snackbar.color = color
      state.snackbar.text = text
    },
    HIDE_SNACKBAR(state) {
      state.snackbar.show = false
    },
  },
  actions: {
    loginApp({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          console.log('userLogin', user)
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem('user', user.displayName)
          } else {
          }
          commit('SET_LOGIN', { access_token: user.za})
          return resolve({ message: 'success' })
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return reject({ message: 'Email hoặc mật khẩu không chính xác' })
          // ..
        });
      })
    },
    register({ commit, dispatch }, data) {
      return request({
        url: '/auth/register',
        method: 'post',
        data: data,
      }).then((resp) => {
        commit('SET_LOGIN', resp)
        dispatch('fetchProfile')
        return resp
      })
    },
    logout({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        firebase.auth().signOut().then(() => {
          console.log('succsess3123 succsess logout')
          // Sign-out successful.
          if (typeof(Storage) !== "undefined") {
            localStorage.removeItem('user')
          } else {
          }
          commit('SET_LOGIN', { access_token: null})
          commit('SET_ACCESS_TOKEN', null)
          commit('SET_LOGIN_PROFILE', null)
          console.log('succsess succsess logout')
          resolve('succsess')
        }).catch((error) => {
          // An error happened.
          reject('error')
        })
        
      })
      
    },
    // get current login user info
  
    fetchProfile({ commit, dispatch, rootState }) {
      return request({
        url: '/me',
        method: 'get',
      }).then((resp) => {
        commit('SET_LOGIN_PROFILE', resp.data)
        return resp
      })
    },
  },
})
