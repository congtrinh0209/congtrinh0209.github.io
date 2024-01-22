<script setup>
  import { ref, reactive, computed, onMounted, watch, defineAsyncComponent, onUpdated } from 'vue'
 
  const loading = ref(false)
  onMounted(() => {
  })
</script>
<template>
  <v-card flat class="mx-auto pa-0">
    Trang đăng nhập
  </v-card>
</template>

<style lang="scss" scoped>
  .header-row {
    align-items: center;
    border-bottom: 1px solid #1E7D30;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  @media screen and (max-width: 426px){
    .header-row .text-header  {
      font-size: 16px;
    }
    .content-row .anh-dai-dien, .content-row .noi-dung {
      padding-bottom: 0;
    }
  }
  
</style>
