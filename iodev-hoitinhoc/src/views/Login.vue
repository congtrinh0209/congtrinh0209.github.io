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
          <v-flex style="text-align: center;">
            <img class="img-login-logo" :src="`${publicPath}/images/image-logo.png?t=93111413`">
          </v-flex>
          <v-flex class="wrap-title pt-1 mb-2">
            <div class="text-1">HỆ THỐNG GIÁM SÁT VÀ ĐÁNH GIÁ THÍCH ỨNG BIẾN ĐỔI KHÍ HẬU</div>
            <div class="text-2">BỘ GIAO THÔNG VẬN TẢI</div>
          </v-flex>
          <v-flex class="wrap-title pt-1">
            <div class="text-1">Monitoring and evaluation system for climate change adaptation activities</div>
            <div class="text-2">Ministry of Transport</div>
          </v-flex>
        </div>

        <div class="wrap-form px-4 py-3" v-if="!signed">
          <div>
            <v-form ref="form" v-model="valid" lazy-validation class="">
              <v-flex xs12 class="action-title mb-5" style="text-align: center;
                font-size: 22px;
                font-family: 'Roboto Slab';
                color: #fff;
                font-weight: 700;">
                <div>ĐĂNG NHẬP</div>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  dense
                  class="input-text"
                  placeholder="Tên đăng nhập"
                  v-model="userName"
                  :rules="[v => !!v || 'Tên đăng nhập là bắt buộc']"
                  required
                  prepend-inner-icon="mdi-account"
                  @keyup.enter="login"
                  hide-details="auto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 class="" style="margin-top: 30px">
                <v-text-field
                  class="input-text"
                  dense
                  placeholder="Mật khẩu"
                  v-model="password"
                  :type="'password'"
                  :rules="[v => !!v || 'Mật khẩu là bắt buộc']"
                  required
                  prepend-inner-icon="mdi-key"
                  @keyup.enter="login"
                  hide-details="auto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 class="wrap-btn-login" style="margin-top: 30px;margin-bottom: 20px">
                <v-btn class="my-0 white--text mr-3 btn-login" style="padding: 0 15px !important;"
                  :loading="loading"
                  :disabled="loading"
                  @click="login"
                >
                  <v-icon size="20">mdi-login</v-icon>&nbsp;
                  Đăng nhập
                </v-btn>
              </v-flex>
              
              <!-- <v-flex xs12 class="wrap-btn-login" style="margin-top: 100px;">
                <v-btn class="my-0 white--text mr-3 btn-login" style="padding: 0 15px !important;"
                  :loading="loading"
                  :disabled="loading"
                  @click="loginKeyCloak"
                >
                  <v-icon size="20">mdi-login</v-icon>&nbsp;
                  Đăng nhập hệ thống
                </v-btn>
              </v-flex> -->
            </v-form>
          </div>
        </div>
        <div class="wrap-form px-3 py-3" v-if="signed">
          <div class="text-login">TÀI KHOẢN ĐÃ ĐĂNG NHẬP HỆ THỐNG</div>
          <v-flex xs12  style="margin: 20px 0;text-align: center;">
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
      
    </v-container>
    <div class="wrap-contact-info">
      <div class="mb-1">Trung tâm công nghệ thông tin - Bộ Giao thông vận tải</div>
      <div class="mb-1">
        <v-icon size="18" color="#fff">mdi-map-marker-outline</v-icon>&nbsp;
        <span>Trụ sở: Số 80 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội</span>
      </div>
      <div class="mb-1">
        <v-icon size="18" color="#fff">mdi-phone-in-talk-outline</v-icon>&nbsp;
        <span>1900 0318 - (024) 3.822.2979</span>
      </div>
      <div class="mb-1">
        <v-icon size="18" color="#fff">mdi-email-outline</v-icon>&nbsp;
        <span>bophanhotro@mt.gov.vn</span>
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
      // let searchParams = ''
      // let params = window.location.search.substring(1)
      // if (params) {
      //   let isLogin = Vue.$cookies.get('Token')
      //   searchParams = JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
      //   if (!isLogin && searchParams && searchParams['code']) {
      //     vm.overlay = true
      //     vm.code = searchParams['code']
      //     vm.getToken()
      //   }
      // }
      if (Vue.$cookies.get('Token')) {
        vm.signed = true
      } else {
        vm.signed = false
      }
    },
    computed: {
    },
    methods: {
      login () {
        let vm = this
        if (vm.loading || !vm.userName || !vm.password) {
          return
        }
        vm.loading = true
        let filter = {
          data: {
            username: vm.userName,
            password: vm.password,
            app: 'dvc-mobile'
          }
        }
        vm.$store.dispatch('login', filter).then(function (result) {
          vm.loading = false
          if (result && result.access_token) {
            try {
              let payload = String(result.access_token.split('.')[1]).replace(/_/g, "/")
              let dataUser = JSON.parse(atob(payload))
              let roleUser = dataUser && dataUser.hasOwnProperty('realm_access') && dataUser.realm_access['roles'] ? dataUser.realm_access.roles : ''
              let admin = roleUser ? roleUser.find(function (item) {
                return item === 'site-admin'
              }) : false
              // console.log('roleUser', roleUser)
              if (roleUser && roleUser.length) {
                vm.$cookies.set('Token', result.access_token, result.expires_in)
                vm.$cookies.set('RefreshToken', result.refresh_token, result.refresh_expires_in)
                axios.defaults.headers['Authorization'] = 'Bearer ' + result.access_token
                vm.$store.commit('SET_ISSIGNED', true)
                if (admin) {
                  vm.$cookies.set('admin', true, result.expires_in)
                  let dataUser1 = {
                    hoVaTen: 'Quản trị',
                    maSoCanBo: '',
                    viTriChucDanh: 'Quản trị hệ thống',
                    vaiTroSuDung: ''
                  }
                  vm.$cookies.set('UserInfo', dataUser1, result.expires_in)
                  vm.$cookies.set('Roles', '', result.expires_in)
                  vm.goToPage()
                } else {
                  // get roles
                  let filter = {
                    token: 'Bearer ' + result.access_token,
                    email: dataUser.email
                  }
                  vm.$store.dispatch('getThongTinUserDangNhap', filter).then(function (result) {
                    let chucDanh = ''
                    let vaiTroSuDung = ''
                    let dataUser2 = {
                      hoVaTen: result.hoVaTen ? result.hoVaTen : '',
                      maSoCanBo: result.maSoCanBo ? result.maSoCanBo : '',
                      viTriChucDanh: chucDanh,
                      vaiTroSuDung: vaiTroSuDung
                    }
                    if (result.viTriChucDanh && result.viTriChucDanh.length) {
                      vaiTroSuDung = []
                      chucDanh = Array.from(result.viTriChucDanh, function (item) {
                        return item.tenGoi
                      })
                      dataUser.viTriChucDanh = chucDanh
                      result.viTriChucDanh.forEach(element => {
                        if (element.vaiTroSuDung && element.vaiTroSuDung.length) {
                          let vaiTroItem = Array.from(element.vaiTroSuDung, function (item) {
                            return item.maMuc
                          })
                          vaiTroSuDung = vaiTroSuDung.concat(vaiTroItem)
                        }
                      })
                      dataUser.vaiTroSuDung = vaiTroSuDung
                      let isAdmin = vaiTroSuDung.find(function (item) {
                        return item == 'QUANTRIHETHONG'
                      })
                      if (isAdmin) {
                        vm.$cookies.set('admin', true, result.expires_in)
                      } else {
                        vm.$cookies.set('admin', '', result.expires_in)
                      }
                      vm.$cookies.set('UserInfo', dataUser2, result.expires_in)
                      vm.$cookies.set('Roles', vaiTroSuDung, result.expires_in)
                    } else {
                      vm.$cookies.set('admin', '', result.expires_in)
                      vm.$cookies.set('UserInfo', dataUser2, result.expires_in)
                      vm.$cookies.set('Roles', vaiTroSuDung, result.expires_in)
                    }
                    setTimeout(function () {
                      vm.goToPage()
                    }, 200)
                  }).catch (function () {
                    vm.loading = false
                    toastr.error('TÀI KHOẢN CHƯA ĐƯỢC CẤP QUYỀN CÁN BỘ')
                    setTimeout(function () {
                      vm.submitLogout()
                    }, 500)
                  })
                }                
              } else {
                vm.loading = false
                vm.overlay = false
                toastr.error('TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG')
                setTimeout(function () {
                  vm.submitLogout()
                }, 500)
              }
            } catch (error) {
              vm.loading = false
              toastr.error('TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG')
              setTimeout(function () {
                vm.submitLogout()
              }, 500)
            }
          } else {
            toastr.remove()
            toastr.error('Tên đăng nhập hoặc mật khẩu không chính xác')
          }
        }).catch(function (result) {
          vm.loading = false
          toastr.remove()
          toastr.error('Tên đăng nhập hoặc mật khẩu không chính xác')
        })
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
              let payload = String(result.access_token.split('.')[1]).replace(/_/g, "/")
              let dataUser = JSON.parse(atob(payload))
              let roleUser = dataUser && dataUser.hasOwnProperty('realm_access') && dataUser.realm_access['roles'] ? dataUser.realm_access.roles : ''
              let admin = roleUser ? roleUser.find(function (item) {
                return item === 'site-admin'
              }) : false
              if (roleUser && roleUser.length) {
                vm.$cookies.set('Token', result.access_token, result.expires_in)
                vm.$cookies.set('RefreshToken', result.refresh_token, result.refresh_expires_in)
                axios.defaults.headers['Authorization'] = 'Bearer ' + result.access_token
                vm.$store.commit('SET_ISSIGNED', true)
                if (admin) {
                  vm.$cookies.set('admin', true, result.expires_in)
                  let dataUser1 = {
                    hoVaTen: 'Quản trị',
                    maSoCanBo: '',
                    viTriChucDanh: 'Quản trị hệ thống',
                    vaiTroSuDung: ''
                  }
                  vm.$cookies.set('UserInfo', dataUser1, result.expires_in)
                  vm.$cookies.set('Roles', '', result.expires_in)
                  window.location.href = window.location.origin  + "/#/"
                } else {
                  let filter = {
                    token: 'Bearer ' + result.access_token,
                    email: dataUser.email
                  }
                  vm.$store.dispatch('getEmployee', filter).then(function (result) {
                    let data = result
                    let userId = data.mappingUser.userId ? data.mappingUser.userId : ''
                    let groupId = data.groupId ? data.groupId : ''
                    vm.$cookies.set('userId', String(userId), result.expires_in)
                    vm.$cookies.set('groupId', groupId, result.expires_in)
                  })
                  vm.$store.dispatch('getThongTinUserDangNhap', filter).then(function (result) {
                    let chucDanh = ''
                    let vaiTroSuDung = ''
                    let dataUser2 = {
                      hoVaTen: result.hoVaTen ? result.hoVaTen : '',
                      maSoCanBo: result.maSoCanBo ? result.maSoCanBo : '',
                      viTriChucDanh: chucDanh,
                      vaiTroSuDung: vaiTroSuDung
                    }
                    if (result.viTriChucDanh && result.viTriChucDanh.length) {
                      vaiTroSuDung = []
                      chucDanh = Array.from(result.viTriChucDanh, function (item) {
                        return item.tenGoi
                      })
                      dataUser.viTriChucDanh = chucDanh
                      result.viTriChucDanh.forEach(element => {
                        if (element.vaiTroSuDung && element.vaiTroSuDung.length) {
                          let vaiTroItem = Array.from(element.vaiTroSuDung, function (item) {
                            return item.maMuc
                          })
                          vaiTroSuDung = vaiTroSuDung.concat(vaiTroItem)
                        }
                      })
                      dataUser.vaiTroSuDung = vaiTroSuDung
                      let isAdmin = vaiTroSuDung.find(function (item) {
                        return item == 'QUANTRIHETHONG'
                      })
                      if (isAdmin) {
                        vm.$cookies.set('admin', true, result.expires_in)
                      } else {
                        vm.$cookies.set('admin', '', result.expires_in)
                      }
                    } else {
                      vm.$cookies.set('admin', '', result.expires_in)
                      vm.$cookies.set('UserInfo', dataUser2, result.expires_in)
                      vm.$cookies.set('Roles', vaiTroSuDung, result.expires_in)
                    }
                    
                    vm.$cookies.set('UserInfo', dataUser2, result.expires_in)
                    vm.$cookies.set('Roles', vaiTroSuDung, result.expires_in)
                    setTimeout(function () {
                      window.location.href = window.location.origin  + "/#/"
                    }, 200)
                  }).catch (function () {
                    vm.loading = false
                    vm.overlay = false
                    toastr.error('TÀI KHOẢN CHƯA ĐƯỢC CẤP QUYỀN CÁN BỘ')
                    setTimeout(function () {
                      vm.submitLogout()
                    }, 500)
                  })
                }
              } else {
                vm.loading = false
                vm.overlay = false
                toastr.error('TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG')
                setTimeout(function () {
                  vm.submitLogout()
                }, 500)
              }
            } catch (error) {
              vm.loading = false
              vm.overlay = false
              toastr.error('TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG')
              setTimeout(function () {
                vm.submitLogout()
              }, 500)
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
        // vm.$store.dispatch('logoutKeyCloak').then(function (result) {
        //   let redirect_uri = process.env.VUE_APP_PATH_REDIRECT_SSO
        //   window.location.href = result.endpoint + '?redirect_uri='+ redirect_uri
        // }).catch(function () {
        //   window.location.href = window.location.origin + window.location.pathname + "#/login"
        // })
      },
      goToPage () {
        let vm = this
        if (vm.isAdmin || vm.checkRole('THEMMOIBAOCAO')) {
          vm.$router.push({ path: '/' })
        } else if (vm.checkRole('XEMBAOCAODONVI') || vm.checkRole('XEMTATCABAOCAO')) {
          vm.$router.push({ path: '/bao-cao/cho-xu-ly' })
        }
      }
    }
  }
</script>

<style lang="scss">
  $image-login: $public-path + '/images/bg-login.png?t=3913123';
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
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  #login-page .text-2 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  .wrap-form {
    max-width: 450px;
    margin: 0 auto;
    background: rgba(14, 42, 66, 0.8);
    border: 1px solid #BAB7B5;
    border-radius: 5px;
    margin-top: 45px;
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
    background: linear-gradient(90deg, #114078 0%, #3757AA 100%);
  }
  .wrap-title, .wrap-btn-login {
    text-align: center;
    text-transform: uppercase;
  }
  .wrap-contact-info {
    max-width: 1366px !important;
    height: 120px;
    position: absolute;
    bottom: 0;
    left: 100px;
    color: #ffffff !important;
  }
  .img-login-logo {
    width: 65px;
  }
  .wrap-title {
    text-align: center;
    margin-top: 0px;
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
</style>
