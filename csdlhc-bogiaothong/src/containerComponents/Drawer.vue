<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    src=""
    mobile-breakpoint="960"
    app
    :width="breakpointName === 'xs' || breakpointName === 'sm' ? 260 : 0"
    v-bind="$attrs"
  >
    
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: []
    }),
    created () {
      let vm = this
      
    },
    mounted () {
      let vm = this

    },
    computed: {
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
    },
    watch: {
    },
    methods: {
    },
  }
</script>

<style lang="sass">

</style>
