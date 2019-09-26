<template>
  <v-app>
    <v-content>
      <qlt-navigation></qlt-navigation>
    </v-content>
  </v-app>
</template>

<script>
import QltNavigation from './components/Index';

export default {
  name: 'App',
  components: {
    "qlt-navigation": QltNavigation,
  },
  data: () => ({
    //
  }),
};
</script>
