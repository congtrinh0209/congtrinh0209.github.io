<template>
  <!-- <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :right="$vuetify.rtl"
    src=""
    app
    v-bind="$attrs"
    :width="0"
  > -->
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :mini-variant.sync="mini"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    src=""
    mobile-breakpoint="960"
    app
    v-bind="$attrs"
  >
    <template v-slot:prepend>
      <v-list-item two-line :class="mini ? 'px-0 pl-2' : ''">
        <v-list-item-avatar v-if="mini">
          <img :src="`${publicPath}/images/image-acc.png`" style="width: 24px;height: 24px;">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-drawer mb-2" style="font-size: 16px">{{userInfo.hoVaTen ? userInfo.hoVaTen : ''}}</v-list-item-title>
          <div style="color: #6EC1FE">{{userInfo.maSoCanBo ? userInfo.maSoCanBo : ''}}</div>
        </v-list-item-content>
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon class="text-drawer">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-if="isAdmin || checkRole('THEMMOIBAOCAO')" :class="menuName === 'TaoBaoCao' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/tao-bao-cao')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-file-document-plus-outline</v-icon>
            </template>
            <span>Tạo báo cáo</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Tạo báo cáo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--  -->
      <!-- <v-list-item :class="menuName === 'BaoCaoMoi' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/bao-cao/bao-cao-moi')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-file-document-edit-outline</v-icon>
            </template>
            <span>Báo cáo tạo mới</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Báo cáo tạo mới</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
      <!--  -->
      <v-list-item v-if="isAdmin || checkRole('XEMBAOCAODONVI') || checkRole('XEMTATCABAOCAO')" :class="menuName === 'BaoCaoChoXuLy' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/bao-cao/cho-xu-ly')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-file-arrow-left-right-outline</v-icon>
            </template>
            <span>Báo cáo chờ xử lý</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Báo cáo chờ xử lý</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isAdmin || checkRole('XEMBAOCAODONVI') || checkRole('XEMTATCABAOCAO')" :class="menuName === 'BaoCaoXuLyLai' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/bao-cao/xu-ly-lai')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-ballot-recount-outline</v-icon>
            </template>
            <span>Báo cáo xử lý lại</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Báo cáo xử lý lại</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isAdmin || checkRole('XEMBAOCAODONVI') || checkRole('XEMTATCABAOCAO')" :class="menuName === 'BaoCaoChoDuyet' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/bao-cao/cho-duyet')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-file-clock-outline</v-icon>
            </template>
            <span>Báo cáo chờ duyệt</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Báo cáo chờ duyệt</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--  -->
      <v-list-item v-if="isAdmin || checkRole('TONGHOPBAOCAO')" :class="menuName === 'ThongKe' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/thong-ke')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-chart-bar</v-icon>
            </template>
            <span>Tổng hợp báo cáo</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Tổng hợp báo cáo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--  -->
      <v-list-item v-if="isAdmin || checkRole('XEMBAOCAODONVI') || checkRole('XEMTATCABAOCAO')" :class="menuName === 'TraCuu' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/bao-cao/tra-cuu')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-text-box-search-outline</v-icon>
            </template>
            <span>Tra cứu báo cáo</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Tra cứu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- <v-list-item :class="menuName === 'TongHopBaoCao' ? 'item-active' : ''" class="mb-3 list-menu" >
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-table-multiple</v-icon>
            </template>
            <span>Tổng hợp báo cáo</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Tổng hợp báo cáo</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
      <!--  -->
      <v-list-item v-if="isAdmin" :class="menuName === 'CoQuanDonVi' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/co-quan-don-vi')">
        <v-list-item-icon>
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-bank</v-icon>
            </template>
            <span>Cơ quan, đơn vị</span>
          </v-tooltip>
        </v-list-item-icon>
        
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Cơ quan, đơn vị</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--  -->
      <v-list-item v-if="isAdmin" :class="menuName === 'CanBo' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/can-bo')">
        <v-list-item-icon>
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-account-multiple-plus-outline</v-icon>
            </template>
            <span>Cán bộ</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Cán bộ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--  -->
      <v-list-item v-if="isAdmin" :class="menuName === 'ViTriChucDanh' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/vi-tri-chuc-danh')">
        <v-list-item-icon>
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-badge-account-horizontal-outline</v-icon>
            </template>
            <span>Chức vụ cán bộ</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Chức vụ cán bộ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--  -->
      <v-list-item v-if="isAdmin" :class="menuName === 'QuanLyDanhMuc' ? 'item-active' : ''" class="list-menu" @click.stop="goToPage('/quan-ly-danh-muc')">
        <v-list-item-icon>
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon class="icon-draw" v-bind="attrs" v-on="on">mdi-format-list-text</v-icon>
            </template>
            <span>Quản lý danh mục</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Quản lý danh mục</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-tooltip top color="#0073C8">
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click.stop="logout" v-bind="attrs" v-on="on" text style="padding-left: 0px !important;" class="px-2 ml-2">
              <v-icon class="icon-draw" >mdi-logout-variant</v-icon> <span class="text-drawer ml-3">&nbsp; &nbsp;Đăng xuất</span>
            </v-btn>
          </template>
          <span class="ml-3">Đăng xuất</span>
        </v-tooltip>
      </div>
    </template>
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
      publicPath: process.env.VUE_APP_PULIC_PATH,
      mini: true,
      menuName: '',
      userInfo: ''
    }),
    created () {
      let vm = this
      let currentQuery = vm.$router.history.current
      console.log('currentQuery', currentQuery)
      vm.menuName = currentQuery.name
      if (currentQuery.name == 'ThongTinDonVi') {
        vm.menuName = 'CoQuanDonVi'
      }
      if (currentQuery.name == 'ThongTinCanBo') {
        vm.menuName = 'CanBo'
      }
      if (currentQuery.name == 'ThongKe') {
        vm.menuName = 'ThongKe'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'cho-xu-ly') {
        vm.menuName = 'BaoCaoChoXuLy'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'cho-duyet') {
        vm.menuName = 'BaoCaoChoDuyet'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'xu-ly-lai') {
        vm.menuName = 'BaoCaoXuLyLai'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'bao-cao-moi') {
        vm.menuName = 'BaoCaoMoi'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'tra-cuu') {
        vm.menuName = 'TraCuu'
      }
      vm.$store.commit('SET_DRAWER', !vm.isMobile)
      vm.userInfo = vm.$cookies.get('UserInfo', '')
    },
    mounted () {
      let vm = this
      vm.mini = vm.isMobile ? false : true
    },
    computed: {
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      }
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        let currentQuery = newRoute.query
        // console.log('currentQuery-watch', newRoute)
        vm.menuName = newRoute.name
        if (newRoute.name == 'ThongTinDonVi') {
          vm.menuName = 'CoQuanDonVi'
        }
        if (newRoute.name == 'ThongTinCanBo') {
          vm.menuName = 'CanBo'
        }
        if (newRoute.name == 'ThongKe') {
          vm.menuName = 'ThongKe'
        }
        if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'cho-xu-ly') {
          vm.menuName = 'BaoCaoChoXuLy'
        }
        if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'cho-duyet') {
          vm.menuName = 'BaoCaoChoDuyet'
        }
        if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'xu-ly-lai') {
          vm.menuName = 'BaoCaoXuLyLai'
        }
        // if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'bao-cao-moi') {
        //   vm.menuName = 'BaoCaoMoi'
        // }
        if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'tra-cuu') {
          vm.menuName = 'TraCuu'
        }
      },
      isMobile (val) {
        this.mini = val ? false : true
        this.$store.commit('SET_DRAWER', !val)
      }
    },
    methods: {
      goToPage (pathname) {
        let vm = this
        vm.$router.push({ path: pathname })
      },
      logout () {
        let vm = this
        vm.$store.commit('SET_ISSIGNED', false)
        localStorage.setItem('user', null)
        vm.$cookies.set('Token', '')
        vm.$cookies.set('RefreshToken', '')
        vm.$cookies.set('admin', '')
        window.location.href = window.location.origin + window.location.pathname + "#/login"
        // vm.$store.dispatch('logoutKeyCloak').then(function (result) {
        //   let redirect_uri = process.env.VUE_APP_PATH_REDIRECT_SSO
        //   window.location.href = result.endpoint + '?redirect_uri='+ redirect_uri
        // }).catch(function () {
        //   window.location.href = window.location.origin + window.location.pathname + "#/login"
        // })
      }
    },
  }
</script>

<style lang="sass">
  .v-navigation-drawer
    background-color: #0468B1 !important
    max-height: none !important
  .v-avatar
    margin-top: 3px !important
  .text-drawer
    color: #ffffff !important
  .item-active
    background: #0073C8
    border-left: 6px solid #2D98E5
    padding: 0 8px !important    
  .item-active .v-icon
    color: #ffffff !important
  .icon-draw
    color: #ffffff !important
  .text-list
    font-size: 14px !important
    text-transform: uppercase
    line-height: 24px !important
    font-weight: 400 !important
  .list-menu
    cursor: pointer
</style>
