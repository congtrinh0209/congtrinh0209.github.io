<script setup>
  import toastr from 'toastr'
  import axios from 'axios'
  import { useRouter, useRoute } from 'vue-router'
  import { useCookies } from 'vue3-cookies'
  import { ref, computed, onMounted } from 'vue'
  import { useAppStore } from '@/stores/global'
  import { authorizationStore } from '@/stores/authorization'
  
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }
  const router = useRouter()
  const appStore = useAppStore()
  const authorization = authorizationStore()
  const { cookies } = useCookies()
  
  const publicPath = ref(import.meta.env.VITE_APP_PULIC_PATH)
  const apiSso = ref(import.meta.env.VITE_APP_PATH_API_SSO)
  const overlay = ref(false)
  const loading = ref(false)
  const valid = ref(true)
  const userName = ref('')
  const password = ref('')
  const client_secret = ref('')
  const code = ref('')
  const signed = ref(false)

  const login = function () {
    if (loading.value || !userName.value || !password.value) {
      return
    }
    loading.value = true
    let filter = {
      data: {
        username: userName.value,
        password: password.value,
        app: 'dvc-mobile'
      }
    }
    authorization.login(filter).then(function (result) {
      loading.value = false
      if (result && result.access_token) {
        let payload = String(result.access_token.split('.')[1]).replace(/_/g, "/")
        let dataUser = JSON.parse(atob(payload))
        // console.log('dataUser', dataUser)
        cookies.set('Token', result.access_token, result.expires_in)
        cookies.set('RefreshToken', result.refresh_token, result.refresh_expires_in)
        cookies.set('UserInfo', JSON.stringify(dataUser), result.expires_in)
        axios.defaults.headers['Authorization'] = 'Bearer ' + result.access_token
        appStore.SET_ISSIGNED(true)
        appStore.SET_USERINFO(dataUser)
        goToPage()
      } else {
        toastr.remove()
        toastr.error('Tên đăng nhập hoặc mật khẩu không chính xác')
      }
    }).catch(function (result) {
      loading.value = false
      toastr.remove()
      toastr.error('Tên đăng nhập hoặc mật khẩu không chính xác')
    })
  }
  const submitLogout = function () {
    signed.value = false
    appStore.SET_ISSIGNED(false)
    localStorage.setItem('user', null)
    cookies.set('Token', '')
    cookies.set('RefreshToken', '')

  }
  const goToPage = function() {
    router.push({ path: '/' })
  }
  
  onMounted(() => {
    if (cookies.get('Token')) {
      signed.value = true
    } else {
      signed.value = false
    }
  })
</script>

<template>
  <div class="wrap-login">
    <v-container
      id="login-page"
      class="px-0 pt-0"
      fluid
      tag="section"
    >
      <div class="container-wrap">
        <div class="wrap-title">
          <div class="d-flex justify-end py-0 pb-0 my-0 px-5">
          </div>
          <v-row align="center">
            <v-col class="py-0">
              <img class="img-login-logo" :src="`${publicPath}/images/logo-bca-bigger.png?t=93111413`">
            </v-col>
          </v-row>
          
          <v-row class="wrap-title pt-1 my-0 mt-3">
            <v-col cols="12" class="text-1 py-2 my-0 mb-2">CỔNG THÔNG TIN QUỐC GIA </v-col>
            <v-col cols="12" class="text-2 py-2">VỀ BẢO VỆ DỮ LIỆU CÁ NHÂN </v-col>
          </v-row>
        </div>

        <div class="wrap-form px-4 py-3" v-if="!signed">
          <div>
            <v-form ref="form" v-model="valid" lazy-validation class="">
              <v-row class="action-title my-0 mb-2" align="center" style="text-align: center;
                font-size: 22px;
                font-family: 'Roboto Slab';
                color: #fff;
                font-weight: 700;"
              >
                <v-col class="py-0">ĐĂNG NHẬP</v-col>
              </v-row>
              <v-row class="my-0">
                <v-col class="py-0">
                  <div style="color: white;" class="mb-2">Tên đăng nhập</div>
                  <v-text-field
                    dense
                    class="input-text"
                    v-model="userName"
                    :rules="[v => !!v || 'Tên đăng nhập là bắt buộc']"
                    required
                    prepend-inner-icon="mdi:mdi-account"
                    @keyup.enter="login"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row xs12 class="mb-0">
                <v-col class="py-0">
                  <div style="color: white;" class="mb-2">Mật khẩu</div>
                  <v-text-field
                    class="input-text"
                    dense
                    v-model="password"
                    :type="'password'"
                    :rules="[v => !!v || 'Mật khẩu là bắt buộc']"
                    required
                    prepend-inner-icon="mdi:mdi-key"
                    @keyup.enter="login"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row align="center" class="wrap-btn-login my-3">
                <v-col>
                  <v-btn class="my-0 white--text mr-3 btn-login" style="padding: 0 15px !important;"
                    :loading="loading"
                    :disabled="loading"
                    @click="login"
                  >
                    <v-icon size="20" icon="mdi:mdi-login"></v-icon>&nbsp;
                    Đăng nhập
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </div>
        <div class="wrap-form px-3 py-3" v-if="signed">
          <div class="text-login">TÀI KHOẢN ĐÃ ĐĂNG NHẬP HỆ THỐNG</div>
          <v-row align="center" style="margin: 20px 0;text-align: center;">
            <v-col cols="12">
              <v-btn small class="my-0 white--text mr-3 btn-login" style="padding: 0 15px !important;"
                :loading="loading"
                :disabled="loading"
                @click="goToPage"
              >
                  <v-icon size="20" icon="mdi:mdi-home-circle-outline"></v-icon>&nbsp;
                  <span>Truy cập hệ thống</span>
              </v-btn>

              <v-btn class="my-0 white--text mr-3 mt-3 btn-login" small style="padding: 0 15px !important;"
                :loading="loading"
                :disabled="loading"
                @click="submitLogout"
              >
                <div class="v-btn__content">
                  <v-icon size="18" icon="mdi:mdi-logout-variant"></v-icon>&nbsp;
                  <span>Đăng xuất</span>
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div> 
      
    </v-container>
    <div class="wrap-contact-info">
      <div class="mb-1">Trường Đại học Quốc gia Hà Nội</div>
      <div class="mb-1">
        <v-icon size="18" color="#fff">mdi-map-marker-outline</v-icon>&nbsp;
        <span>Xuân Thủy - Cầu Giấy - Hà Nội</span>
      </div>
      <div class="mb-1">
        <v-icon size="18" color="#fff">mdi-phone-in-talk-outline</v-icon>&nbsp;
        <span>(84.4) 37547670</span>
      </div>
      <div class="mb-1">
        <v-icon size="18" color="#fff">mdi-email-outline</v-icon>&nbsp;
        <span>vanphong@vnu.edu.vn</span>
      </div>
    </div>
    <div class="text-center">
      <v-overlay :value="overlay">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
    </div>
  </div>
  
</template>

<style lang="scss">
  $image-login: $public-path + '/images/bg-login-2.png?t=3913123';
  #app {
    background: transparent !important
  }
  .wrap-login {
    background: url($image-login) no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
  }
  .wrap-login input {
    padding-top: 0px !important;
    min-height: 0px;
  }
  .wrap-login .v-input__details .v-messages {
    color: #ff5252 !important;
    caret-color: #ff5252 !important;
  }
  .wrap-login .v-field--error:not(.v-field--disabled) .v-field__outline {
    display: none !important
  }
  .wrap-login .v-field--variant-filled .v-field__outline::before, .wrap-login .v-field--variant-underlined .v-field__outline::before,
  .wrap-login .v-field--variant-filled .v-field__outline::after, .wrap-login .v-field--variant-underlined .v-field__outline::after {
    display: none !important
  }
  #login-page {
    position: relative;
    margin: 0 auto;
  }
  .container-wrap {
    // background: rgba(14, 42, 66, 0.8);
    // box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: auto;
    height: auto;
    // padding: 45px;
    margin: 0 auto;
    margin-top: 20px;
  }
  #login-page .text-1 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #007f3e;
    margin-bottom: 10px;
  }
  #login-page .text-2 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 24px;
    color: #007f3e;
  }
  .wrap-form {
    max-width: 450px;
    margin: 0 auto;
    background: #21332a;
    border: 1px solid #BAB7B5;
    border-radius: 5px;
    margin-top: 25px;
  }
  .text-login {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.17);
    margin-bottom: 15px;
    text-transform: uppercase;
    text-align: center;
  }
  .wrap-login .input-text .v-input__slot:before {
    border-color: transparent;
    border: none !important;
  }
  .wrap-login .input-text .v-input__slot::after {
    display: none !important
  }
  .wrap-login .input-text .v-input__slot {
    border: 1px solid #BAB7B5;
    padding: 4px 5px;
    border-radius: 5px;
    height: 32px
  }
  .wrap-login .input-text .v-field__field {
    // height: 32px;
    // max-height: 32px;
  }
  .wrap-login .input-text .v-field {
    border: 1px solid #bab7b5;
    padding: 4px 5px;
    border-radius: 5px;
    height: 32px;
  }
  .input-text .v-field__prepend-inner {
    margin-top: 0;
    padding-top: 0;
  }
  .input-text .v-icon{
    color: #ffffff !important;
    font-size: 20px !important;
    opacity: 1 !important
  }
  .input-text input {
    color: #ffffff !important;
    font-size: 14px;
  }
  .input-text  .v-input__slot {
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 8%), 0px 2px 2px 0px rgb(0 0 0 / 0%), 0px 1px 5px 0px rgb(0 0 0 / 7%) !important;
  }
  .input-text input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ffffff !important;
    opacity: 1; /* Firefox */
  }

  .input-text input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #ffffff !important;
  }

  .input-text input::-ms-input-placeholder { /* Microsoft Edge */
    color: #ffffff !important;
  }
  .btn-login {
    background: linear-gradient(90deg,#007f3e,#007f3e)
  }
  .wrap-title, .wrap-btn-login {
    text-align: center;
    text-transform: uppercase;
  }
  .wrap-contact-info {
    display: none;
    max-width: 1366px !important;
    height: 120px;
    position: absolute;
    bottom: 0;
    left: 100px;
    color: #ffffff !important;
  }
  .img-login-logo {
    width: 135px;
  }
  .wrap-title {
    text-align: center;
    margin-top: 0px;
  }
  .img-flag {
    width: 23px;
    height: 16px;
  }
  @media screen and (max-width: 426px) {
    .action-title {
      display: none;
    }
    .img-login-logo {
      width: 50px;
    }
    .container-wrap {
      padding: 8px;
      margin-top: 0px;
    }
    .wrap-title {
      text-align: center;
      margin-top: 0px;
    }
    #login-page .text-1 {
      font-size: 16px;
      margin-bottom: 5px;
    }
    #login-page .text-2 {
      font-size: 16px;
    }
    .wrap-btn-login {
      text-align: center;
    }
    .wrap-form {
      margin: 0 10px;
      margin-top: 10px;
    }
    .wrap-contact-info {
      left: 15px;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 769px){
    .container-wrap {
      padding: 8px;
      margin-top: 0px;
    }
    .wrap-title {
      text-align: center;
      margin-top: 0px;
    }
    .wrap-form {
      margin-top: 15px;
      padding-top: 24px !important;
    }
    #login-page .text-1 {
      font-size: 18px;
    }
    .wrap-contact-info {
      left: 50px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1025px){
    .container-wrap {
      padding: 8px;
      margin-top: 0px;
    }
    .wrap-title {
      text-align: center;
      margin-top: 0px;
    }
    .wrap-form {
      margin-top: 15px;
    }
    .wrap-contact-info {
      left: 50px;
    }
  }
  #login-page button {
    padding: 5px;
    font-size: 16px;
    color: white;
    margin: 5px;
  }
  #login-page .label {
    color: white;
  }
  #login-page .lang-btn {
    margin-top: 5px;
    margin-left: 91%;
    position: absolute;
  }
</style>
