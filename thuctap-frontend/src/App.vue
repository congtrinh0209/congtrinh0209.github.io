
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'


const { name } = useDisplay()
const router = useRouter()

onMounted(() => {
})
</script>

<template>
  <v-app class="wrap-app">
    <router-view></router-view>
  </v-app>
</template>

