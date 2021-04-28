<template>
  <v-fab-transition>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      :style="{
        bottom: fab ? '100px' : '',
      }"
      aria-label="Đầu trang"
      bottom
      small
      color="red"
      dark
      fab
      fixed
      right
      title="Đầu trang"
      @click="toTop"
    >
      <v-icon>mdi-arrow-up-bold-circle</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'AppFab',
  data() {
    return {
      fab: false,
    }
  },
  methods: {
    onScroll() {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || document.documentElement.offsetTop || 0
      this.fab = top > 300
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>
