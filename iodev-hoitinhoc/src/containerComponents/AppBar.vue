<template>
  <v-app-bar app>
    <v-app-bar-nav-icon class="btn-visible-drawer pl-2" @click.stop="changeDrawer" style="color: #2161B1;"></v-app-bar-nav-icon>
    <div id="header-app">
      <header id="banner" class="px-5">
        <div class="container layout wrap" style=""> 
          <a href="javascript:;" class="py-0 px-0"> 
            <img class="logo-banner" :src="`${publicPath}/images/image-logo.png`">
          </a>
          <div class="title-banner">
            <div class="mb-2" style="width: 100%">HỆ THỐNG THÔNG TIN IODEV</div>
            <div style="width: 100%">Information systems IODEV</div>
          </div>
        </div>
      </header>
      <!-- <v-btn small class="btn-login my-0 white--text mr-3" color="#2161B1"
        @click=""
        
      >
        <div class="v-btn__content">
          <v-icon size="18">mdi-logout-variant</v-icon>&nbsp;
          <span>Đăng nhập</span>
        </div>
      </v-btn> -->
      <v-btn v-if="!isSigned" style="position: absolute;max-width: 300px;top: 10px;right: 10px;" class="d-inline-block"
        color="primary"
        dark
        text
        @click="login"
      >
        <v-icon color="#fff" class="mr-3">mdi-login-variant</v-icon>
        <span style="color: #fff">Đăng nhập</span>
      </v-btn>
      <div v-if="isSigned" style="position: absolute;max-width: 300px;top: 15px;right: 10px;" class="d-inline-block">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              text
            >
              <v-icon color="#fff" class="mr-3">mdi-account-circle</v-icon>
              <span style="color: #fff">{{userInfo.email}}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click.stop="submitLogout">
              <v-list-item-title>
                <v-icon color="#2161b1" class="mr-3">mdi-logout</v-icon>
                <span style="color: #2161b1">Đăng xuất</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',
    components: {
    },

    props: {
    },

    data: () => ({
      // isSigned: false,
      userInfo: '',
      appName: process.env.NODE_ENV,
      title: process.env.VUE_APP_BASE_TITLE,
      publicPath: process.env.VUE_APP_PULIC_PATH,
    }),
    created () {
      let vm = this
      // if (vm.$cookies.get('Token')) {
      //   vm.isSigned = true
      // } else {
      //   vm.isSigned = false
      // }
      vm.userInfo = vm.$cookies.get('UserInfo', '')
    },
    mounted () {
      let vm = this
    },
    computed: {
      indexTab () {
        return this.$store.getters.getIndexTab
      },
      isSigned () {
        return this.$cookies.get('Token') ? true : false
      },
    },
    watch: {
    },
    methods: {
      changeDrawer () {
        let vm = this
        let drawer = vm.$store.state.drawer
        vm.$store.commit('SET_DRAWER', !drawer)
      },
      redirectTo (item, index) {
        this.$store.commit('SET_INDEXTAB', index)
        this.$router.push({ path: item.to })
      },
      login () {
        let vm = this
        vm.$router.push({ path: '/dang-nhap'})
      },
      submitLogout () {
        let vm = this
        vm.$store.commit('SET_ISSIGNED', false)
        localStorage.setItem('user', null)
        vm.$cookies.set('Token', '')
        vm.$cookies.set('RefreshToken', '')
        window.location.href = window.location.origin + window.location.pathname + "#/"
        window.location.reload()
      },
    },
  }
</script>
<style lang="scss">
  $image-banner: $public-path + '/images/bg-banner-default.png';
  header {
    height: 64px !important;
    max-height: 64px;
    background-color: transparent;
    box-shadow: none;
    background: url(/images/bg-banner-default.png) no-repeat;
    background-size: cover;
  }
  // header:before {
  //   position: absolute;
  //   left: 0;
  //   top: 0px;
  //   z-index: -1;
  //   width: 100%;
  //   height: 500px;
  //   content: "";
  //   pointer-events: none;
  //   -webkit-transition: all .6s;
  //   -o-transition: all .6s;
  //   transition: all .6s;
  //   opacity: .8
  // }
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: transparent !important
  }
  .v-app-bar.v-app-bar--fixed {
    position: relative !important;
  }
  header .v-toolbar__content {
    height: 64px !important;
    padding: 0;
  }
  header.v-app-bar {
    box-shadow: none !important;
  }
  #header-app {
    height: 64px;
    width: 100%;
    // background: url($image-banner) no-repeat;
    background-size: cover;
    padding: 0;
  }
  #banner .container {
    height: 64px;
    padding: 0
  }
  #banner .container a {
    text-decoration: none;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    align-content: center;
  }
  .title-banner-en {
    font-size: 24px;
    color: #0056a4;
  }
  .logo-banner {
    width: 52px;
    height: 52px;
    margin-right: 13px;
  }
  .title-banner {
    display: flex;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    padding-top: 3px;
    // color: #004b8f;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    align-content: center;
    flex-wrap: wrap;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  }
  #header-nav {
    position: relative;
  }
  #header-nav #navigation {
    height: 41px;
    background: #F9F4F1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  #header-nav #navigation ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      overflow: hidden;
      margin: auto;
      padding: 0;
      justify-content: left;
      max-width: 1300px;
  }
  #header-nav #navigation ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      overflow: hidden;
      margin: auto;
      padding: 0;
  }
  #header-nav #navigation li:hover a, #header-nav #navigation li.selected a {
      color: $base-color;
      font-weight: 700;
  }
  #header-nav #navigation li a {
      padding: 8px 15px;
      display: block;
      position: relative;
      text-transform: uppercase;
      text-decoration: none;
      color: $base-color;
      font-size: 16px;
      
  }
  #header-nav #navigation li:hover a:before, #header-nav #navigation li.selected a:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: $base-color;
  }
  #header-nav #banner .btns {
    position: absolute;
    right: 15px;
    top: 105px;
    z-index: 2;
  }

  #header-nav #banner .btns a {
    display: inline-block;
    /* background-color: white; */
    background-color: transparent;
    padding: 6px 50px 6px 20px;
    /* color: #0072bc; */
    /* border: 2px solid #0072bc; */
    text-decoration: none;
    color: white;
    border: 2px solid white;
    border-radius: 50px;
    background-repeat: no-repeat;
    background-position: right -2px top -2px;
    background-size: auto 35px;
  }
  .btn-visible-drawer {
    display: none;
  }
  @media screen and (max-width: 426px){
    .title-banner-en {
      display: none;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 769px){
    header {
      height: 60px !important;
    }
    header .v-toolbar__content {
      height: 60px !important;
    }
    #header-app {
      height: 60px;
    }
    #banner .container {
      height: 60px;
    }
    #banner .container a {
      max-width: 50px;
    }
    .title-banner {
      max-width: calc(100% - 50px);
      font-size: 13px;
      line-height: 18px;
      align-content: center;
    }
    .title-banner-en {
      font-size: 12px;
    }
    .btn-visible-drawer {
      display: block;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1025px){
    .title-banner {
      font-size: 14px;
      letter-spacing: normal;
      align-content: center;
    }
    .title-banner-en {
      font-size: 12px;
    }
  }
</style>

