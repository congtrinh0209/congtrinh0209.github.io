<template>
  <div class="wrap-page-login">
    <v-container fluid class="page-login" fill-height>
      <v-row>
        <v-col :cols="12">
          <v-card class="pa-2 page-login__card" tile>
            <v-card-title class="mx-3 py-0">
              <div class="image-title-login text-center my-2">
                <img src="/images/logo.png?t=1619886615424" alt="" height="80" contain />
              </div>
              <div class="text-title-login white--text text-center">BẢO HÀNH ĐIỆN TỬ</div>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-form ref="form" v-model="formValid" class="form-kichhoat mt-10 mb-5 pt-4" lazy-validation>
                <div class="label-bh mb-2">MÃ THẺ BẢO HÀNH:</div>
                <v-text-field
                  v-model="formModel.eCode"
                  autocomplete="off"
                  name="login"
                  type="text"
                  solo
                  class="font-weight-bold"
                />
                <div class="label-bh mb-2">MÃ BẢO MẬT:</div>
                <v-text-field
                  v-model="formModel.captcha"
                  autocomplete="off"
                  name="captcha"
                  solo
                  class="font-weight-bold"
                />
              </v-form>
            </v-card-text>
            <v-card-actions class="mx-2 pt-0">
              <v-btn class="btn-submit-login" tile color="primary" :loading="loading" @click="handleLogin">
                <v-icon size="20" color="#fff" class="mr-2">mdi-login-variant</v-icon> 
                <span>KÍCH HOẠT BẢO HÀNH</span>
              </v-btn>
            </v-card-actions>
            <v-card-actions class="mx-2 pt-0">
              <v-btn class="btn-submit-login" tile color="primary" :loading="loading" @click="handleLogin">
                <v-icon size="20" color="#fff" class="mr-2">mdi-credit-card-search-outline</v-icon> 
                <span>THÔNG TIN BẢO HÀNH</span>
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
        eCode: '',
        captcha: '',
      },
      formRule: {
        eCode: [(v) => !!v || this.$t('Thông tin bắt buộc', ['eCode'])],
        captcha: [(v) => !!v || this.$t('Thông tin bắt buộc', ['captcha'])],
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

          })
          .catch(() => {

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

<style lang="css">
main {
  padding-top: 0px !important;
}
</style>
<style lang="sass" scoped>
.page-login
  &__card
  max-width: 500px
  margin: 0 auto
</style>
<style lang="css" scoped>
.label-bh {
  font-weight: bold;
  color: #0c0078;
}
.wrap-page-login{
  background-image: url(/images/bg_active.jpg);
  background-position: center;
  /* background-color: #1ae28a;
  background: linear-gradient( -45deg, #209077 0%, #1ae28a 100%); */
}
.wrap-page-login:before {
  z-index: 0;
  width: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
  background: rgba(0,0,0,.21)
}
.page-login__card {
  border-radius: 6px !important;
  background-color: transparent;
  box-shadow: none !important
}
.v-card__title {
  background: linear-gradient(65deg,#171cc2,#ff5200);
  color: #fff;
  /* margin-top: -55px; */
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
  /* font-weight: bold; */
  width: 100%;
  height: 42px !important;
  /* background: linear-gradient(65deg,#49c217,#ff5200); */
  border-radius: 4px;
}
</style>
