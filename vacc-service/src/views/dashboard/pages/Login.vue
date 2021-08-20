<template>
  <div class="wrap-page-login">
    <v-container fluid class="page-login" fill-height>
      <v-row>
        <v-col :cols="12">
          <v-card class="pa-3 page-login__card" tile>
            <v-card-title class="mx-3 py-0">
              <div class="image-title-login text-center my-2">
                <img src="/images/logo.png?t=1619886615424" alt="" height="80" contain />
              </div>
              <div class="text-title-login white--text text-center">TIÊM CHỦNG COVID-19</div>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-form ref="form" v-model="formValid" class="mt-10 mb-5" lazy-validation>
                <v-text-field
                  v-model="formModel.username"
                  append-icon="mdi-email"
                  autocomplete="off"
                  name="login"
                  label="Tên đăng nhập"
                  type="text"
                  required
                  outlined
                  :rules="formRule.username"
                />
                <v-text-field
                  v-model="formModel.password"
                  append-icon="mdi-lock"
                  autocomplete="off"
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  :rules="formRule.password"
                  required
                  outlined
                  @keyup.enter="handleLogin"
                />
              </v-form>
            </v-card-text>
            <v-card-actions class="mx-2 pt-0 row">
              <v-btn class="btn-submit-login" tile color="#0072bc" :loading="loading" @click="handleLogin">
                <v-icon size="20" color="#fff" class="mr-2">mdi-login-variant</v-icon> 
                <span>ĐĂNG NHẬP</span>
              </v-btn>
              <v-btn class="btn-submit-login my-3 mx-0" tile color="#0072bc" @click="goBack">
                <v-icon size="20" color="#fff" class="mr-2">mdi-reply-all</v-icon> 
                <span>QUAY LẠI</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const name = 'page-login'
export default {
  name: name,
  data() {
    return {
      loading: false,
      formValid: false,
      formModel: {
        username: '',
        password: '',
      },
      formRule: {
        username: [(v) => !!v || this.$t('Thông tin bắt buộc', ['username'])],
        password: [(v) => !!v || this.$t('Thông tin bắt buộc', ['password'])],
      }
    }
  },
  computed: {},
  methods: {
    handleLogin() {
      // login success
      this.$cookies.set("Token","86868686",60 + 30)
      this.$store.commit('SET_ISSIGNED', true)
      localStorage.setItem('user', JSON.stringify({name: 'Trịnh Công Trình', role: 'Admin'}))
      // 
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
          .dispatch('loginApp', this.formModel)
          .then(() => {
            const redirect = this.$route.query.redirect
            const route = redirect ? { path: redirect } : { path: '/' }
            this.$router.push(route)
            this.loading = false
          })
          .catch(() => {
            this.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: 'Tên đăng nhập hoặc mật khẩu không chính xác',
              color: 'error',
            })
            this.loading = false
          })
      }
    },
    goBack () {
      this.$router.push({ path: '/' })
    },
    handleRegister() {
      // console.log(this)
    },
    handleSocialLogin() {},
  },
}
</script>

<style lang="sass" scoped>
.page-login
  &__card
  max-width: 500px
  margin: 0 auto
</style>
<style lang="css" scoped>
.wrap-page-login{
  height: 100vh;
  background-image: url(/images/bg_active.jpg);
  background-position: top;
  background-size: auto
}
.wrap-page-login:before {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
  background: rgba(0,0,0,.21)
}
.page-login__card {
  border-radius: 6px !important;
}
.v-card__title {
  background: linear-gradient(65deg,#171cc2,#ff5200);
  color: #fff;
  margin-top: -55px;
  height: auto;
  border-radius: 6px !important;
}
.text-title-login {
  width: 100%;
  margin-top: -10px;
  margin-bottom: 8px;
  font-size: 16px;
    font-weight: bold;
}
.image-title-login {
  width: 100%;
}
.btn-submit-login {
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  height: 42px !important;
  /* background: linear-gradient(65deg,#49c217,#ff5200); */
  border-radius: 4px;
}
</style>
