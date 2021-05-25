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


const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  // Not logged in
  const hasRememberedAccount = localStorage.getItem('user');
  if (!hasRememberedAccount) return null;

  // Logged in but current user is not fetched --> wait (10s)
  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      reject(null);
      console.log('Reject timeout');
    }, 10000);

    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        reject(null);
      }

      const token = await user.getIdToken();
      resolve(token);

      unregisterAuthObserver();
      clearTimeout(waitTimer);
    });
  });
}

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs

axios.interceptors.request.use(async (config) => {
  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) {
    window.location.href = window.location.origin + '/#/'
    return
  }
  let tokenFirebase = await user.getIdToken()
  console.log('userLogin', user)
  console.log('userLoginToken', tokenFirebase)
  store.dispatch("SET_LOGIN", (tokenFirebase, ''))
  store.dispatch("SET_USER_PERMISTION", user)
  store.dispatch("SET_LOGIN_PROFILE", user)
  window.location.href = window.location.origin + '/#/tables/regular-tables'
});
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
