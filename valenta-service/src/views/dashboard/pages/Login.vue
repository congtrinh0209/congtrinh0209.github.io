<template>
<v-app>
  <div class="wrap-page-login">
    <v-container fluid class="page-login" fill-height>
      <v-row>
        <v-col :cols="12">
          <v-card class="pa-3 page-login__card" tile>
            <v-card-title class="mx-3 py-0">
              <div class="image-title-login text-center">
                <img src="https://vuetify-material-dashboard-free.vuetifyjs.com/img/vmd.a39402e6.svg" alt="" height="80" contain />
              </div>
              <div class="text-title-login white--text text-center">FDS ADMIN SYSTEM</div>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-form ref="form" v-model="formValid" class="mt-10 mb-5" lazy-validation>
                <v-text-field
                  v-model="formModel.username"
                  append-icon="mdi-email"
                  autocomplete="off"
                  name="login"
                  label="Mật khẩu"
                  placeholder="Mật khẩu"
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
                  placeholder="Mật khẩu"
                  type="password"
                  :rules="formRule.password"
                  required
                  outlined
                  @keyup.enter="handleLogin"
                />
              </v-form>
            </v-card-text>
            <v-card-actions class="mx-2 pt-0">
              <v-btn class="btn-submit-login" tile color="primary" :loading="loading" @click="handleLogin">
                <v-icon size="20" color="#fff" class="mr-2">mdi-login-variant</v-icon> ĐĂNG NHẬP
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</v-app>
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
        username: 'admin',
        password: 'admin',
      },
      formRule: {
        username: [(v) => !!v || this.$t('rule.required', ['username'])],
        password: [(v) => !!v || this.$t('rule.required', ['password'])],
      }
    }
  },
  computed: {},
  methods: {
    handleLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
          .dispatch('demoLogin', this.formModel)
          .then(() => {
            const redirect = this.$route.query.redirect
            const route = redirect ? { path: redirect } : { path: '/' }
            this.$router.push(route)
            this.loading = false
          })
          .catch(() => {
            window._VMA.$emit('SHOW_SNACKBAR', {
              show: true,
              text: 'Auth Failed',
              color: 'error',
            })
            this.loading = false
          })
      }
    },
    handleRegister() {
      console.log(this)
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
  background-image: url(https://vue-material-dashboard-laravel.creative-tim.com/img/login.jpg);
  background-position: top;
  background-size: cover
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
  background: rgba(0,0,0,.5)
}
.page-login__card {
  border-radius: 6px !important;
}
.v-card__title {
  background: linear-gradient(60deg,#1772c2,#43a047);
  color: #fff;
  margin-top: -55px;
  height: auto;
  border-radius: 6px !important;
}
.text-title-login {
  width: 100%;
  margin-top: -10px;
  margin-bottom: 8px;
}
.image-title-login {
  width: 100%;
}
.btn-submit-login {
  width: 100%;
  height: 42px !important;
  background: linear-gradient(60deg,#1772c2,#43a047);
  border-radius: 4px;
}
</style>
