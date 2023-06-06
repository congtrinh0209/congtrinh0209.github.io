<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useCookies } from 'vue3-cookies'
  import { useAppStore } from '@/stores/global.js'

  const router = useRouter()
  const route = useRoute()
  const { cookies } = useCookies()
  const appStore = useAppStore()
  const appName = ref(import.meta.env.NODE_ENV)
  const title = ref(import.meta.env.VITE_APP_BASE_TITLE)
  const publicPath = ref(import.meta.env.VITE_APP_PULIC_PATH)
  const items = reactive([
    {
      icon: 'mdi:mdi-file-document-outline',
      title: 'Hồ sơ hành chính',
      class: 'hoso-tab',
      id: 'hoso-tab-id',
      to: '/bao-cao/cho-xu-ly'
    },
    {
      icon: 'mdi:mdi-chart-box-outline',
      title: 'Báo cáo thống kê',
      class: 'baocao-tab',
      id: 'baocao-tab-id',
      to: '/tao-bao-cao'
    },
    {
      icon: 'mdi:mdi-bank',
      title: 'Cơ quan, đơn vị',
      class: 'donvi-tab',
      id: 'donvi-tab-id',
      to: '/co-quan-don-vi'
    },
    {
      icon: 'mdi:mdi-account-multiple-outline',
      title: 'Cán bộ',
      class: 'canbo-tab',
      id: 'canbo-tab-id',
      to: '/can-bo'
    },
    {
      icon: 'mdi:mdi-format-list-checks',
      title: 'Danh mục',
      class: 'danhmuc-tab',
      id: 'danhmuc-tab-id',
      to: '/quan-ly-danh-muc'
    }
  ])
  const showMenu = ref(false)
  const drawer = computed(() => appStore.getDrawer)
  const breakpointName = computed(() => appStore.getBreakpointName)
  const menuSelected = computed(() => appStore.getMenuSelected)
  const isSigned = computed(() => appStore.getIsSigned)
  const userLogin = computed(() => appStore.getUserLogin)

  const changeDrawer = function () {
    appStore.SET_DRAWER(!drawer.value)
  }
  const redirectTo = function (item, index) {
    changeDrawer(false)
    appStore.SET_MENU_SELECTED(item)
    // router.push({ path: item.to })
  }
  const submitLogout = function () {
    appStore.SET_ISSIGNED(false)
    localStorage.setItem('user', null)
    cookies.set('Token', '')
    cookies.set('RefreshToken', '')
    router.push({ path: '/login' })
  }
  const goToLogin = function () {
    router.push({ path: '/login' })
  }

  onMounted(() => {
    
  })
</script>

<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :right="$vuetify.rtl"
    src=""
    mobile-breakpoint="960"
    app
    v-bind="$attrs"
  >
    <template v-slot:prepend>
      <v-list-item two-line class="px-0 pl-2">
        <template v-slot:prepend>
          <img
            :src="`${publicPath}/images/image-acc.png`"
            style="width: 36px; height: 36px"
          />
        </template>

        <v-list-item-title class="text-drawer ml-2" v-text="userLogin.name ? userLogin.name : ''" style="font-size: 14px"></v-list-item-title>

        <template v-slot:append>
          <v-btn variant="text" @click.stop="changeDrawer">
            <v-icon class="text-drawer" size="26" icon="mdi:mdi-chevron-left"></v-icon>
          </v-btn>
        </template>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="(menu, index) in items" :key="index" @click.stop="redirectTo(menu, index)"
      :class="menu.id === menuSelected.id ? 'item-active mb-3 list-menu' : 'mb-3 list-menu'" 
      >
        <template v-slot:prepend>
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                class="icon-draw"
                style="font-size: 24px !important"
                :icon="menu.icon"
                ></v-icon>
            </template>
            <span>{{ menu.title }}</span>
          </v-tooltip>
        </template>
        <v-list-item-title class="text-drawer text-list">{{
          menu.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          variant="text"
          @click.stop="submitLogout"
          style="padding-left: 0px !important"
          class="px-2 ml-2"
        >
          <v-icon class="icon-draw" size="26" icon="mdi:mdi-logout-variant"></v-icon>
          <span class="text-drawer ml-3">&nbsp; &nbsp;Đăng xuất</span>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>


<style lang="scss">
  .v-navigation-drawer {
    background-color: #002715fa !important;
    max-height: none !important
  }
  .v-avatar {
    margin-top: 3px !important
  }
  .text-drawer {
    color: #ffffff !important
  }
  .item-active {
    background: #003D1A;
    border-left: 6px solid #2B8700;
    padding: 0 8px !important
  }
  .item-active .v-icon {
    color: #ffffff !important
  }
  .icon-draw {
    color: #2B8700 !important
  }
  .text-list {
    font-size: 14px !important;
    text-transform: uppercase;
    line-height: 24px !important;
    font-weight: 400 !important
  }
  .list-menu {
    cursor: pointer
  }
</style>