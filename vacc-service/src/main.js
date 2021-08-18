import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import axios from 'axios'


// const getFirebaseToken = async () => {
//   const currentUser = firebase.auth().currentUser;
//   if (currentUser) return currentUser.getIdToken();

//   // Not logged in
//   const hasRememberedAccount = localStorage.getItem('user');
//   if (!hasRememberedAccount) return null;

//   // Logged in but current user is not fetched --> wait (10s)
//   return new Promise((resolve, reject) => {
//     const waitTimer = setTimeout(() => {
//       reject(null);
//       console.log('Reject timeout');
//     }, 10000);

//     const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
//       if (!user) {
//         reject(null);
//       }

//       const token = await user.getIdToken();
//       resolve(token);

//       unregisterAuthObserver();
//       clearTimeout(waitTimer);
//     });
//   });
// }

// // Set up default config for http requests here
// // Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs

// axios.interceptors.request.use(async (config) => {
//   const token = await getFirebaseToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// firebase.auth().onAuthStateChanged(async (user) => {
//   if (!user) {
//     window.location.href = window.location.origin + '/#/'
//     return
//   }
//   var tokenFirebase = await user.getIdToken()
//   var userLoginInfo = null
//   db.collection("users").where("uid", "==", user.uid).get().then(function(querySnapshot) {
//     var usersList = []
//     if (querySnapshot.size) {
//       querySnapshot.docs.forEach(function(item) {
//         usersList.push(item.data())
//       })
//       if (usersList.length === 1) {
//         userLoginInfo = usersList[0]
//       }
//     } else {
//     }
//     store.commit("SET_USER_PERMISTION", userLoginInfo)
//     store.commit("SET_LOGIN_PROFILE", userLoginInfo)
//   }).catch(function () {
//   })
//   store.commit("SET_LOGIN", (tokenFirebase, ''))
// });
Vue.mixin({
  data: () => ({
  }),
  methods: {
  }
})
new Vue({
  router,
  store,
  vuetify,
  i18n,
  beforeCreate () {
    
  },
  render: h => h(App),
}).$mount('#app')
