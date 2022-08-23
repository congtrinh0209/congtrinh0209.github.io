<template>
  <div class="wrap-login">
    <v-container
      id="login-page"
      class="px-0 pt-0"
      fluid
      tag="section"
    >
      <div class="wrap-title">
        <v-flex>
          <img class="img-login-logo" :src="`${publicPath}/images/logo-login.png?t=931413`">
        </v-flex>
        <v-flex style="" class="pt-1">
          <div class="text-1">CƠ SỞ DỮ LIỆU HÀNH CHÍNH</div>
          <div class="text-2">BỘ GIAO THÔNG VẬN TẢI</div>
        </v-flex>
      </div>
      <div class="container-wrap">
        <div  v-if="!signed">
          <div class="text-title">
            <span>ĐĂNG NHẬP</span>
          </div>
          <div class="hr-line"></div>
          <div class="wrap-form">
            <v-form ref="form" v-model="valid" lazy-validation class="mt-2">
              <v-flex xs12>
                <div class="label-text">Tên đăng nhập</div>
                <v-text-field
                  class="input-text"
                  dense flat
                  placeholder="Nhập tên đăng nhập"
                  v-model="userName"
                  :rules="[v => !!v || 'Tên đăng nhập là bắt buộc']"
                  required
                  prepend-inner-icon="mdi-account"
                  @keyup.enter="loginKeyCloak"
                  hide-details="auto"
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex xs12 class="" style="margin-top: 30px">
                <div class="label-text">Mật khẩu</div>
                <v-text-field
                  class="input-text"
                  dense
                  outlined
                  placeholder="Nhập mật khẩu"
                  v-model="password"
                  :type="'password'"
                  :rules="[v => !!v || 'Mật khẩu là bắt buộc']"
                  required
                  prepend-inner-icon="mdi-key"
                  @keyup.enter="loginKeyCloak"
                  hide-details="auto"
                ></v-text-field>
              </v-flex>
              
              <v-flex xs12 class="wrap-btn-login">
                <v-btn class="my-0 white--text btn-login"
                  :loading="loading"
                  :disabled="loading"
                  @click="loginKeyCloak"
                >
                  Đăng nhập
                </v-btn>
              </v-flex>
            </v-form>
          </div>
        </div>
        <div v-if="signed">
          <div class="text-title">
            <span>ĐĂNG NHẬP</span>
          </div>
          <div class="hr-line"></div>
          <div class="wrap-form">
            <div class="text-login">TÀI KHOẢN ĐÃ ĐĂNG NHẬP HỆ THỐNG</div>
              <v-flex xs12  style="margin-top: 32px;text-align: center;">
                <v-btn class="my-0 white--text mr-3 btn-login" style="padding: 0 15px !important;"
                  :loading="loading"
                  :disabled="loading"
                  @click="submitLogout"
                >
                  <div class="v-btn__content">
                    <v-icon size="18">mdi-logout-variant</v-icon>&nbsp;
                    <span>Đăng xuất</span>
                  </div>
                </v-btn>
                <v-btn class="my-0 white--text mr-3 btn-login" style="padding: 0 15px !important;"
                  :loading="loading"
                  :disabled="loading"
                  @click="goToPage"
                >
                    <v-icon size="20">mdi-home-circle-outline</v-icon>&nbsp;
                    <span>Truy cập hệ thống</span>
                </v-btn>
              </v-flex>
          </div>
          
        </div>
      </div> 
      
    </v-container>
  </div>
  
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import toastr from 'toastr'
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }
  export default {
    name: 'Login',

    data: () => ({
      titleLogin: process.env.VUE_APP_TITLE_LOGIN,
      publicPath: process.env.VUE_APP_PULIC_PATH,
      apiSso: process.env.VUE_APP_PATH_API_SSO,
      overlay: false,
      loading: false,
      valid: true,
      userName: '',
      password: '',
      client_secret: '',
      code: '',
      signed: false
    }),
    created () {
      let vm = this
      let searchParams = ''
      let params = window.location.search.substring(1)
      if (params) {
        let isLogin = Vue.$cookies.get('Token')
        searchParams = JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
        if (!isLogin && searchParams && searchParams['code']) {
          vm.overlay = true
          vm.code = searchParams['code']
          // vm.getToken()
        }
      }
      if (Vue.$cookies.get('Token')) {
        vm.signed = true
      } else {
        vm.signed = false
      }
    },
    computed: {
    },
    methods: {
      submitConfirmLogin () {
        let vm = this
        vm.$router.push({ path: '/don-vi' })
      },
      loginKeyCloak () {
        let vm = this
        if (vm.loading) {
          return
        }
        vm.loading = true
        let filter = {
          uri: process.env.VUE_APP_PATH_REDIRECT_SSO
        }
        vm.$store.dispatch('loginKeyCloak', filter).then(function (result) {
          vm.loading = false
          if (result) {
            window.location.href = result.endpoint
          }
        }).catch(function (result) {
          vm.loading = false
        })

        // window.location.href = 'https://idp.fds.vn/realms/mtdata-dev/protocol/openid-connect/auth?response_type=code&client_id=mtdata-cmonweb&state=xxx&&redirect_uri=' + filter.uri
      },
      getToken () {
        let vm = this
        vm.loading = false
        let filter = {
          code: vm.code,
          redirect_uri: process.env.VUE_APP_PATH_REDIRECT_SSO
        }
        vm.$store.dispatch('getTokenKeyCloak', filter).then(function (result) {
          vm.loading = false
          vm.overlay = false
          if (result.access_token) {
            try {
              // let dataUser = JSON.parse(atob(result.access_token.split('.')[1]))
              // let scopeUser = dataUser.scope.split(" ")
              // let roleUser = ''
              // try {
              //   roleUser = dataUser.realm_access.roles
              // } catch (error) {
              // }
              // let role = roleUser.filter(function (item) {
              //   return item === 'site-admin'
              // })
              // let hasAdmin = scopeUser.filter(function (item) {
              //   return item === 'site-admin'
              // })
              // if (hasAdmin && hasAdmin.length && role && role.length) {
                vm.$cookies.set('Token', result.access_token, result.expires_in)
                vm.$cookies.set('RefreshToken', result.refresh_token, result.refresh_expires_in)
                axios.defaults.headers['Authorization'] = 'Bearer ' + result.access_token
                // let dataUser = {
                //   role_name: '',
                //   user_id: ''
                // }
                // localStorage.setItem('user', JSON.stringify(dataUser))
                vm.$store.commit('SET_ISSIGNED', true)
                window.location.href = window.location.origin + window.location.pathname + "#/don-vi"
              // } else {
              //   vm.loading = false
              //   vm.overlay = false
              //   toastr.error('TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG')
              //   vm.submitLogout()
              // }

            } catch (error) {
              vm.loading = false
              vm.overlay = false
              toastr.error('TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG')
              vm.submitLogout()
            }
          }
          
        }).catch(function (result) {
          vm.loading = false
          vm.overlay = false
          toastr.error('Đăng nhập không thành công')
        })
      },
      submitLogout () {
        let vm = this
        vm.signed = false
        vm.$store.commit('SET_ISSIGNED', false)
        localStorage.setItem('user', null)
        vm.$cookies.set('Token', '')
        vm.$cookies.set('RefreshToken', '')
        // 
        let redirect_uri = process.env.VUE_APP_PATH_REDIRECT_SSO
        window.location.href = "https://idp.fds.vn/realms/mtdata-dev/protocol/openid-connect/logout"
        // 
        // vm.$store.dispatch('logoutKeyCloak').then(function (result) {
        //   let redirect_uri = process.env.VUE_APP_PATH_REDIRECT_SSO
        //   window.location.href = result.endpoint + '?redirect_uri='+ redirect_uri
        // }).catch(function () {
        //   window.location.href = window.location.origin + window.location.pathname + "#/login"
        // })
      },
      getPassword () {
        let vm = this
      }
    }
  }
</script>

<style lang="scss">
  $image-login: $public-path + '/images/bg-login.png';
  #app {
    background: transparent !important
  }
  .text-title {
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .hr-line {
    border-top: 3px solid #BAB7B5;
  }
  .wrap-login {
    background: url($image-login) no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
  }
  .wrap-login input {
    caret-color: #ffffff;
  }
  #login-page {
    position: relative;
    margin: 0 auto;
  }
  .container-wrap {
    box-sizing: border-box;
    max-width: 475px;
    height: 345px;
    border: 3px solid #BAB7B5;
    padding: 42px;
    padding-top: 0px;
    margin: 0 auto;
    margin-top: 24px
  }
  .wrap-login .text-1 {
    font-family: "Roboto Slab";
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
  }
  .wrap-login .text-2 {
    font-family: "Roboto Slab";
    font-style: normal;
    // color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .wrap-login .wrap-form {
    margin-top: 36px;
  }
  .wrap-login .wrap-form .v-input__slot fieldset {
    color: #ffffff !important;
  }
  #login-page .label-text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-bottom: 6px;
  }
  .text-login {
    font-family: "Roboto Slab";
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.17);
    margin-bottom: 15px;
    text-transform: uppercase;
    text-align: center;
  }
  .input-text .v-icon{
    color: #ffffff !important;
    font-size: 20px !important;
  }
  .input-text input {
    color: #ffffff !important;
    font-size: 14px;
  }
  .input-text  .v-input__slot {
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 8%), 0px 2px 2px 0px rgb(0 0 0 / 0%), 0px 1px 5px 0px rgb(0 0 0 / 7%) !important;
  }
  .input-text input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.7) !important;
    opacity: 1; /* Firefox */
  }

  .input-text input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.7) !important;
  }

  .input-text input::-ms-input-placeholder { /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.7) !important;
  }
  .btn-login {
    width: 120px;
    height: 32px;
    background: linear-gradient(90deg, #114078 0%, #3757AA 100%);
    border-radius: 3px;
  }
  .wrap-form .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: rgba(255, 255, 255, 0.7) !important
  }
  .wrap-form .theme--light.v-text-field > .v-input__control > .v-input__slot:after {
    border-color: rgba(255, 255, 255, 0.7) !important
  }
  .wrap-title {
    margin-top: 64px;
  }
  .wrap-title, .wrap-btn-login {
    text-align: center;
  }
  .wrap-btn-login {
    margin-top: 28px
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    .container-wrap {
      width: 300px;
      padding: 8px;
      margin-top: 20%
    }
    .text-1, .text-2 {
      font-size: 16px;
    }
    .wrap-title, .wrap-btn-login {
      text-align: center;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 768px){
    .container-wrap {
      width: 350px;
      padding: 8px;
    }
  }
</style>
