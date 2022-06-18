<template>
  <v-app>
    <confirm-dialog></confirm-dialog>
    <router-view></router-view>
  </v-app>
</template>

<script>
import VueConfirmDialog from './views/ConfirmDialog.vue'
export default {
  name: 'App',

  components: {
    'confirm-dialog': VueConfirmDialog
  },

  data: () => ({
    //
  }),
};
</script>
