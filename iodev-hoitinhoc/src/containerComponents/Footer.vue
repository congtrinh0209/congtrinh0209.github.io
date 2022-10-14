<template>
  <v-footer app
    id="footer" class="px-3"
  >
      <v-layout wrap>
        <v-flex xs12>
          <v-layout wrap>
            <v-flex class="text-1">
              <v-icon size="18" color="#2161B1">mdi-copyright</v-icon>&nbsp;
              <span>TRUNG TÂM CÔNG NGHỆ THÔNG TIN - BỘ GIAO THÔNG VẬN TẢI</span>
            </v-flex>
            <v-flex class="text-2">
              <v-icon size="18" color="#2161B1">mdi-phone-in-talk-outline</v-icon>&nbsp;
              <span>Hotline: 1900 0318 - Điện thoại: (024) 3.822.2979 </span>
            </v-flex>
            <v-flex class="text-3">
              <v-icon size="18" color="#2161B1">mdi-email-outline</v-icon>&nbsp;
              <span>Email: bophanhotro@mt.gov.vn</span>
            </v-flex>
          </v-layout>
        </v-flex>
        <!-- <v-flex xs12 md4 class="image-footer">
            <img class="img-1" :src="`${publicPath}/images/logo-fds.png`">
            <img class="img-2" :src="`${publicPath}/images/logo-flex.png`">
        </v-flex> -->
      </v-layout>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      appName: process.env.NODE_ENV,
      publicPath: process.env.VUE_APP_PULIC_PATH,
    }),
    created () {
      let vm = this
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  #footer {
    height: 36px;
    /* background: url(/images/bg-footer.png) no-repeat; */
    box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.3) !important;
    background-color: #ffffff;
    background-size: cover;
    padding: 0;
  }
  #footer .container {
    height: 36px;
    padding: 10px;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    align-content: center;
  }
  .image-footer {
    text-align: right;
  }
  #footer .text-1, #footer .text-2, #footer .text-3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    color: #2161B1;
  }
  #footer .text-2 {
    text-align: center;
  }
  #footer .text-3 {
    text-align: right;
  }
  .image-footer .img-1 {
    margin-right: 15px;
  }
  @media screen and (max-width: 426px){
    #footer, #footer .container {
      height: 90px
    }
    #footer .text-2, #footer .text-3 {
      text-align: left;
      margin-top: 5px;
    }
  }
  @media screen and (min-width: 426px) and (max-width: 769px){
    #footer, #footer .container {
      height: 56px
    }
    #footer .text-2, #footer .text-3 {
      text-align: left;
      margin-top: 5px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1025px){
    #footer, #footer .container {
      height: 56px
    }
    #footer .text-1 {
      width: 100%;
    }
    #footer .text-2, #footer .text-3 {
      text-align: left;
      margin-top: 5px;
    }
  }
</style>
