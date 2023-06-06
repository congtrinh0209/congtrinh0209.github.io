<script setup>
  import { useCookies } from 'vue3-cookies'
  import { ref, computed, onMounted } from 'vue'
  import { useCounterStore } from '@/stores/counter'
  const { cookies } = useCookies()
  const counter = useCounterStore()
  const counterScope = ref(0)
  const countComputed = computed(() => counter.count + 1)
  const incrementCounter = () => {
    counter.increment()
  }
  const onSubmit = () => {
    let filter = {
      "username": "001197020202",
      "password": "1",
      "app": "dvc-mobile"
    }
    counter.login(filter).then(res => {
      console.log('ressss', res)
      cookies.set('Token', res.access_token)
    }).catch(error => {
      console.log('error', error)
    })
  }
  onMounted(() => {
    
  })
</script>
<template>
  <div class="about">
    QUẢN LÝ HỒ SƠ
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
