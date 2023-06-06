<script setup>
  import Drawer from '../containerComponents/Drawer.vue'
  import AppBar from '../containerComponents/AppBar.vue'
  import Footer from '../containerComponents/Footer.vue'

  import { ref, computed, onMounted } from 'vue'
  import { useAppStore } from '@/stores/global.js'
  const appStore = useAppStore()
  const showConfirm = function() {
    appStore.SET_SHOWCONFIRM(true)
    let confirm = {
      auth: false,
      title: 'Xóa cán bộ',
      message: 'Bạn có chắc chắn muốn xóa',
      button: {
        yes: 'Có',
        no: 'Không'
      },
      callback: () => {
        console.log("Tôi đồng ý")
      }
    }
    appStore.SET_CONFIG_CONFIRM_DIALOG(confirm)
  }
  onMounted(() => {
    
  })
</script>

<template>
  <v-app>
    <Drawer></Drawer>
    <AppBar></AppBar>
    <v-main>
      <div class="container wrap-content-page">
        <!-- <v-btn color="success" @click="showConfirm()">Show confirm</v-btn> -->
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<style lang="scss">
  main.v-main {
    padding-top: 120px !important
  }
  @media screen and (max-width: 426px){
    
  }
  @media screen and (max-width: 1024px){
    main.v-main {
      padding-top: 75px !important
    }
    .wrap-content-page {
      padding-bottom: 75px !important
    }
  }
</style>
