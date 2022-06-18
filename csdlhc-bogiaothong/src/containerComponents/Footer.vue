<template>
  <v-footer
    id="footer" class="py-0 pl-0"
  >
    <v-container class="pt-1">
      <v-layout wrap style="">
        <v-flex xs12>
          <v-layout wrap>
            <v-flex class="text-1">
              <v-icon size="18" color="#1767DF">mdi-alpha-c-circle-outline</v-icon>&nbsp;
              <span>TRUNG TÂM CÔNG NGHỆ THÔNG TIN - BỘ GIAO THÔNG VẬN TẢI</span>
            </v-flex>
            <v-flex class="text-2">
              <v-icon size="18" color="#1767DF">mdi-phone-in-talk</v-icon>&nbsp;
              <span>Hotline: 1900 0318 - Điện thoại: (024) 3.822.2979 </span>
            </v-flex>
            <v-flex class="text-3">
              <v-icon size="18" color="#1767DF">mdi-email</v-icon>&nbsp;
              <span>Email: bophanhotro@mt.gov.vn</span>
            </v-flex>
          </v-layout>
        </v-flex>
        
      </v-layout>
    </v-container>
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
    height: 45px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    padding: 0;
  }
  #footer .container {
    height: 45px;
    padding: 0;
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
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    color: #1767DF;
  }
  #footer .text-1 {
    font-weight: 700;
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
</style>
