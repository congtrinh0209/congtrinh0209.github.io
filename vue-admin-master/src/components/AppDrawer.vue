<template>
  <v-navigation-drawer
    v-model="showDrawer"
    app
    class="app-drawer"
    :mini-variant.sync="mini"
    mini-variant-width="64"
    :width="drawerWidth"
  >
    <v-toolbar color="primary darken-1" dark>
      <img class="mr-2" :src="computeLogo" height="36" />
      <v-toolbar-title>
        <span class="hidden-sm-and-down">Admin System</span>
      </v-toolbar-title>
    </v-toolbar>
    <!-- <app-switcher /> -->
    <vue-perfect-scrollbar class="app-drawer__scrollbar">
      <div class="app-drawer__inner">
        <nav-list :items="computeMenu" :mini="mini" />
      </div>
    </vue-perfect-scrollbar>
    <template #append>
      <div class="" style="background-color: #2196f3e0; border-color: #2196f3e0;">
        <template v-if="mini">
          <v-btn block width="64" height="36" icon tile class="mx-auto" @click="handleDrawerCollapse">
            <v-icon color="#fff">mdi-arrow-collapse-right</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <v-btn right block height="36" icon tile @click="handleDrawerCollapse">
            <v-icon color="#fff">mdi-arrow-collapse-left</v-icon>
          </v-btn>
        </template>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { protectedRoute as routes } from '@/router/config'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
// import AppSwitcher from './AppSwitcher'
import NavList from '@/components/nav/NavList'
export default {
  name: 'AppDrawer',
  components: { 
    VuePerfectScrollbar,
    // AppSwitcher,
    NavList 
  },
  props: {},
  data() {
    return {
      mini: false,
      showDrawer: true,
      drawerWidth: 256,
      scrollSettings: {
        maxScrollbarLength: 160,
      },
    }
  },

  computed: {
    computeLogo() {
      return 'https://vuetify-material-dashboard-free.vuetifyjs.com/img/vmd.a39402e6.svg'
    },
    computeMenu() {
      return this.filterRouteItem(routes[0].children)
    },
    computeHeight() {
      return {
        height: this.height || '',
      }
    },
  },
  created() {},

  methods: {
    filterRouteItem(routes) {
      return routes
        .filter((item) => item.meta.hidden !== true)
        .map((item) => {
          return {
            title: this.$t(item.meta.title),
            icon: item.meta.icon,
            path: item.path,
            isNew: item.meta.isNew || false,
            children: item.children ? this.filterRouteItem(item.children) : [],
          }
        })
    },
    handleDrawerCollapse() {
      this.mini = !this.mini
    },
    toggleDrawer() {
      this.showDrawer = !this.showDrawer
    },
  },
}
</script>

<style lang="sass" scoped>
.app-drawer
  &__srollbar
    max-height:  calc(100vh - 64px - 36px - 44px)
  &__inner
    height: calc(100vh - 64px - 36px - 44px)
.v-toolbar 
  box-shadow: none !important
</style>
