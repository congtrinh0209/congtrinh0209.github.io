<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useCookies } from 'vue3-cookies'
  import { useAppStore } from '@/stores/global.js'

  const router = useRouter()
  const route = useRoute()
  const { cookies } = useCookies()
  const appStore = useAppStore()
  const appName = ref(import.meta.env.NODE_ENV)
  const title = ref(import.meta.env.VITE_APP_BASE_TITLE)
  const publicPath = ref(import.meta.env.VITE_APP_PULIC_PATH)
  const items = reactive([
    {
      icon: 'mdi:mdi-file-document-outline',
      title: 'Hồ sơ hành chính',
      class: 'hoso-tab',
      id: 'hoso-tab-id',
      to: '/bao-cao/cho-xu-ly'
    },
    {
      icon: 'mdi:mdi-chart-box-outline',
      title: 'Báo cáo thống kê',
      class: 'baocao-tab',
      id: 'baocao-tab-id',
      to: '/tao-bao-cao'
    },
    {
      icon: 'mdi:mdi-bank',
      title: 'Cơ quan, đơn vị',
      class: 'donvi-tab',
      id: 'donvi-tab-id',
      to: '/co-quan-don-vi'
    },
    {
      icon: 'mdi:mdi-account-multiple-outline',
      title: 'Cán bộ',
      class: 'canbo-tab',
      id: 'canbo-tab-id',
      to: '/can-bo'
    },
    {
      icon: 'mdi:mdi-format-list-checks',
      title: 'Danh mục',
      class: 'danhmuc-tab',
      id: 'danhmuc-tab-id',
      to: '/quan-ly-danh-muc'
    }
  ])
  const showMenu = ref(false)
  const drawer = computed(() => appStore.getDrawer)
  const breakpointName = computed(() => appStore.getBreakpointName)
  const menuSelected = computed(() => appStore.getMenuSelected)
  const isSigned = computed(() => appStore.getIsSigned)
  const userLogin = computed(() => appStore.getUserLogin)

  const changeDrawer = function () {
    appStore.SET_DRAWER(!drawer.value)
  }
  const redirectTo = function (item, index) {
    appStore.SET_MENU_SELECTED(item)
    router.push({ path: item.to })
  }
  const submitLogout = function () {
    appStore.SET_ISSIGNED(false)
    cookies.set('Token', '')
    cookies.set('RefreshToken', '')
    router.push({ path: '/login' })
  }
  const goToLogin = function () {
    router.push({ path: '/login' })
  }

  onMounted(() => {
    
  })
</script>

<template>
  <v-app-bar app>    
    <div id="header-app">
      <header id="banner" class="d-flex px-3 py-0" style="align-items: center;">
        <div class="d-flex flex-wrap container mx-0 my-0" style="position: relative; align-items: center;">
          <div class="d-inline-flex py-0" style="position: relative">
            <a href="javascript:;" class="py-0 px-0"> 
              <img class="logo-banner" :src="`${publicPath}/images/logo-bca.png`">
            </a>
          </div>
          <div class="d-inline-flex py-0">
            <div class="title-banner">
              <div class="title-banner-vi mb-1">CỔNG THÔNG TIN QUỐC GIA VỀ</div>
              <div class="title-banner-vi">BẢO VỆ DỮ LIỆU CÁ NHÂN</div>
            </div>
          </div>
          <v-menu v-if="isSigned && breakpointName !== 'xs' && breakpointName !== 'sm'" transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-chip
                style="height: 36px;position: absolute;top: 5px;right:5px;z-index: 2;"
                v-bind="props"
                class="ma-2"
                color="primary"
                @click="showMenu = !showMenu"
              >
                <v-icon color="white" left size="24" class="mx-2" icon="mdi:mdi-account-circle-outline"></v-icon>
                <span style="max-width: 100px;overflow: hidden;color: #ffffff;">{{userLogin ? (userLogin['name'] ? userLogin['name'] : userLogin['email']) : ''}}</span>
                <v-icon class="ml-2" v-if="!showMenu" size="20" color="white" icon="mdi:mdi-chevron-up"></v-icon>
                <v-icon class="ml-2" v-else size="20" color="white" icon="mdi:mdi-chevron-down"></v-icon>
              </v-chip>
            </template>
            <v-list class="pa-0">
              <v-list-item
                to="/pages/user"
                rel="noopener"
              >
                <template v-slot:prepend>
                  <v-icon color="#4caf50" icon="mdi:mdi-account" class="mr-2"></v-icon>
                </template>
                <v-list-item-title>Thông tin tài khoản</v-list-item-title>
              </v-list-item>
              
              <v-list-item
                @click="submitLogout"
                rel="noopener"
              >
                <template v-slot:prepend>
                  <v-icon color="#4caf50" icon="mdi:mdi-power" class="mr-2"></v-icon>
                </template>
                <v-list-item-title >Đăng xuất</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </header>
      <v-icon size="26" class="btn-visible-drawer pl-2" icon="mdi:mdi-format-list-bulleted" color="#fff" @click.stop="changeDrawer"></v-icon>
    </div>
    <div id="header-desktop">
      <div id="banner-desk" class="container">
        <v-layout> 
          <div class="text-right py-0" style="color:#ff6a00;">
            <nav class="sort-pages modify-pages" id="navigation" > 
                <ul aria-label="Site Pages" role="menubar" class="container">
                    <li v-for="(item, i) in items" :key="i" :class="item.id == menuSelected.id ? 'selected' : ''" :id="'layout_'+i" role="presentation">
                      <v-menu
                        v-if="item.hasOwnProperty('childItems')"
                        transition="scale-transition"
                        :class="item['class']" :id="item['id']" :aria-labelledby="'layout_'+i" 
                      >
                        <template v-slot:activator="{ props }">
                          <a
                            v-bind="props"
                          >
                            <span> {{item.title}}</span>
                            <v-icon class="ml-2" color="#fff" size="22">
                              mdi-chevron-down
                            </v-icon>
                          </a>
                        </template>

                        <v-list>
                          <template v-for="(item2, index) in item.childItems" :key="index">
                            <v-list-item
                              @click="redirectTo(item2, i)"
                            >
                              <v-list-item-title>
                                <span class="" style="font-weight: 500;"> {{item2.title}}</span>
                              </v-list-item-title>
                            </v-list-item>
                            <v-divider
                              v-if="index !== item.childItems.length - 1"
                              :inset="item.inset"
                            ></v-divider>
                          </template>

                        </v-list>
                      </v-menu>
                      <a v-else @click="redirectTo(item, i)" :class="item['class']" :id="item['id']" :aria-labelledby="'layout_'+i" aria-haspopup="true"  href="javascript:;" role="menuitem">
                        <v-icon class="mr-2" color="#1E7C30" size="22">
                          {{item.icon}}
                        </v-icon>
                        <span> {{item.title}}</span>
                      </a>
                    </li>
                </ul>
            </nav>
          </div>
        </v-layout>
      </div>
    </div>
  </v-app-bar>
</template>

<style lang="scss">
  $image-banner: $public-path + '/images/bg-banner-default.png';
  header#banner {
    height: 75px !important;
  }
  header.v-app-bar .v-toolbar__content {
    height: 118px !important;
    padding: 0;
    flex-direction: column;
  }
  #header-app {
    width: 100%;
    background: url($image-banner) no-repeat;
    background-size: cover;
    padding: 0;
  }
  #banner .container {
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
    font-size: 12px;
  }
  .logo-banner {
    width: 64px;
    margin-right: 20px;
  }
  .title-banner {
    display: flex;
    flex-direction: column;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #FFFFFF;
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
      color: #1E7C30;
      font-weight: 700;
  }
  #header-nav #navigation li a {
      padding: 8px 15px;
      display: block;
      position: relative;
      text-transform: uppercase;
      text-decoration: none;
      color: #1E7C30;
      font-size: 16px;
      
  }
  #header-nav #navigation li:hover a:before, #header-nav #navigation li.selected a:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #1E7C30;
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
  .lang-btn {
    margin-top: 5px;
    right: 15px;
    position: absolute;
  }
  .lang-btn img {
    width: 25px;
    height: 35px;
    margin-left: 15px;
  }
  // ----desktop-nav--------
  header.v-app-bar {
    box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 30%) !important;
  }
  #header-desktop {
    background: #e8eaed;
    padding: 0;
    margin: 0;
    width: 100%;
    // box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 30%) !important;
  }
  #header-desktop #banner-desk {
      // background: linear-gradient(65deg,#3ec7d3,#2243ad);
      padding: 0;
  }
  #header-desktop #navigation {
      /* background-color: #fd6c1d; */
      position: relative;
  }
  #header-desktop #banner-desk .container, #header-desktop #navigation .container {
      padding-left: 0;
      padding-right: 0;
      /* max-width: 1300px; */
      margin: 0 auto;
  }
  #header-desktop #navigation ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      overflow: hidden;
      margin: auto;
      padding: 0;
      justify-content: center;
  }
  #header-desktop #navigation ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      overflow: hidden;
      margin: auto;
      padding: 0;
  }
  #header-desktop #navigation li {
    margin-right: 15px;
  }
  #header-desktop #navigation li.selected a span {
      font-weight: bold;
  }
  #header-desktop #navigation li:hover a, #header-desktop #navigation li.selected a {
    color: #1E7C30;
    font-weight: bold;
  }
  #header-desktop #navigation li a {
      padding: 10px 15px;
      display: block;
      position: relative;
      text-transform: uppercase;
      text-decoration: none;
      color: #1E7C30;
      font-size: 14px;
      font-weight: 500;
  }
  #header-desktop #navigation li:hover a:before, #header-desktop #navigation li.selected a:before {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #1E7C30;
  }
  #header-desktop #banner-desk .btns {
    position: absolute;
    right: 15px;
    top: 20px;
    z-index: 2;
  }
  #header-desktop #banner-desk .btns a.login {
    background-image: url(/images/icon-login-white.png);
  }
  #header-desktop #banner-desk .btns a {
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
  // ----end------------
  @media screen and (max-width: 426px){
    .title-banner-en {
      display: none;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1023px){
    .logo-banner {
      margin-right: 10px;
      width: 60px;
      height: 60px
    }
    #header-desktop {
      display: none;
    }
    header {
      height: 75px !important;
    }
    header .v-toolbar__content {
      height: 75px !important;
    }
    #header-app {
      height: 75px;
    }
    #banner .container {
      height: 75px;
    }
    .title-banner {
      font-size: 13px;
      line-height: 18px;
      align-content: center;
    }
    .title-banner-en {
      font-size: 12px;
    }
    .btn-visible-drawer {
      display: inline-block;
      position: absolute;
      right: 10px;
      bottom: 5px
    }
  }
  // @media screen and (min-width: 769px) and (max-width: 1025px){
  //   .title-banner {
  //     font-size: 14px;
  //     letter-spacing: normal;
  //     align-content: center;
  //   }
  //   .title-banner-en {
  //     font-size: 12px;
  //   }
  // }
  @media screen and (min-width: 1024px){
    header#banner {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
</style>

