<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  const appName = ref(import.meta.env.NODE_ENV)
  const publicPath = ref(import.meta.env.VITE_APP_PULIC_PATH)
</script>

<template>
  <v-footer app
    id="footer" class="px-3"
  >
      <v-layout wrap class="container">
        <div class="d-flex flex-wrap d-xs-6">
          <div class="text-1 d-flex mr-3">
            <v-icon size="18" color="#00803D" icon="mdi:mdi-copyright" class="mr-2"></v-icon>&nbsp;
            <span>Đại học Quốc gia Hà Nội</span>
          </div>
          <div class="text-2 d-flex mr-3">
            <v-icon size="18" color="#00803D" icon="mdi:mdi-phone-in-talk-outline" class="mr-2"></v-icon>&nbsp;
            <span>Điện thoại: 099.9.999.999</span>
          </div>
          <div class="text-3 d-flex">
            <v-icon size="18" color="#00803D" icon="mdi:mdi-email-outline" class="mr-2"></v-icon>&nbsp;
            <span>Email: vanphong@vnu.edu.vn</span>
          </div>
        </div>
      </v-layout>
  </v-footer>
</template>


<style>
  #footer {
    height: 36px;
    /* background: url(/images/bg-footer.png) no-repeat; */
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3) !important;
    background-color: #e8eaed;
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
    min-width: 250px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    color: #00803D;
  }
  #footer span {
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
  @media screen and (min-width: 769px) and (max-width: 1023px){
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
