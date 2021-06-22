<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    src="/images/bg-draw-2.jpg"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item class="px-0">
        <v-img
          src="/images/logo-valenta.png"
        />
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >

      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </base-item-group>

        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
          :class="item['class']"
          :id="item['id']"
        />
      </template>
      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

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
      if (vm.userLogin && vm.userLogin['role'] && vm.userLogin['role'] === 'Admin') {
        vm.items = [
          {
            icon: 'mdi-home',
            title: 'Trang chủ',
            class: 'home-tab',
            id: 'home-valenta'
          },
          {
            icon: 'mdi-credit-card-search-outline',
            title: 'Tra cứu bảo hành',
            to: '/',
          },
          {
            icon: 'mdi-shield-plus-outline',
            title: 'Kích hoạt bảo hành',
            to: '/pages/kich-hoat-bao-hanh/0',
          },
          {
            icon: 'mdi-format-list-bulleted',
            title: 'Quản lý phiếu bảo hành',
            to: '/pages/quan-ly-bao-hanh',
          },
          {
            icon: 'mdi-inbox-multiple-outline',
            title: 'Danh mục sản phẩm',
            to: '/pages/danh-muc-san-pham',
          },
          {
            icon: 'mdi-account-supervisor-circle',
            title: 'Danh sách khách hàng',
            to: '/pages/danh-sach-khach-hang',
          },
          {
            icon: 'mdi-account',
            title: 'Danh sách nhân viên, đại lý',
            to: '/pages/users',
          }
        ]
      } else if (vm.userLogin && vm.userLogin['role'] && vm.userLogin['role'] === 'Member') {
        vm.items = [
          {
            icon: 'mdi-home',
            title: 'Trang chủ',
            class: 'home-tab',
            id: 'home-valenta'
          },
          {
            icon: 'mdi-credit-card-search-outline',
            title: 'Tra cứu bảo hành',
            to: '/',
          },
          {
            icon: 'mdi-shield-plus-outline',
            title: 'Kích hoạt bảo hành',
            to: '/pages/kich-hoat-bao-hanh/0',
          },
          {
            icon: 'mdi-format-list-bulleted',
            title: 'Quản lý phiếu bảo hành',
            to: '/pages/quan-ly-bao-hanh',
          },
          {
            icon: 'mdi-ballot-outline',
            title: 'Sản phẩm',
            class: '',
            id: 'product-valenta'
          },
          {
            icon: 'mdi-card-account-phone-outline',
            title: 'Liên hệ',
            class: '',
            id: 'contact-valenta'
          }
        ]
      } else {
        vm.items = [
          {
            icon: 'mdi-home',
            title: 'Trang chủ',
            class: 'home-tab',
            id: 'home-valenta'
          },
          {
            icon: 'mdi-credit-card-search-outline',
            title: 'Tra cứu bảo hành',
            to: '/',
          },
          {
            icon: 'mdi-ballot-outline',
            title: 'Sản phẩm',
            class: '',
            id: 'product-valenta'
          },
          {
            icon: 'mdi-card-account-phone-outline',
            title: 'Liên hệ',
            class: '',
            id: 'contact-valenta'
          },
          {
            icon: 'mdi-login-variant',
            title: 'Đăng nhập',
            to: '/login',
          }
        ]
      }
    },
    mounted () {
      let vm = this
      console.log('mounted')
      setTimeout(function () {
        document.getElementById('home-valenta').href = 'http://valenta.vn'
        document.getElementById('product-valenta').href = 'http://valenta.vn/product.html'
        document.getElementById('contact-valenta').href = 'http://valenta.vn/contact.html'
      }, 300)
    },
    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
      userLogin () {
        return this.$store.getters.getPermistion
      }
    },
    watch: {
      userLogin (val) {
        let vm = this
        if (val && val['role'] && val['role'] === 'Admin') {
          vm.items = [
            {
              icon: 'mdi-home',
              title: 'Trang chủ',
              class: 'home-tab'
            },
            {
              icon: 'mdi-credit-card-search-outline',
              title: 'Tra cứu bảo hành',
              to: '/',
            },
            {
              icon: 'mdi-shield-plus-outline',
              title: 'Kích hoạt bảo hành',
              to: '/pages/kich-hoat-bao-hanh/0',
            },
            {
              icon: 'mdi-format-list-bulleted',
              title: 'Quản lý phiếu bảo hành',
              to: '/pages/quan-ly-bao-hanh',
            },
            {
              icon: 'mdi-inbox-multiple-outline',
              title: 'Danh mục sản phẩm',
              to: '/pages/danh-muc-san-pham',
            },
            {
              icon: 'mdi-account-supervisor-circle',
              title: 'Danh sách khách hàng',
              to: '/pages/danh-sach-khach-hang',
            },
            {
              icon: 'mdi-account',
              title: 'Danh sách nhân viên, đại lý',
              to: '/pages/users',
            }
          ]
        } else if (val && val['role'] && val['role'] === 'Member') {
          vm.items = [
            {
              icon: 'mdi-home',
              title: 'Trang chủ',
              class: 'home-tab'
            },
            {
              icon: 'mdi-credit-card-search-outline',
              title: 'Tra cứu bảo hành',
              to: '/',
            },
            {
              icon: 'mdi-shield-plus-outline',
              title: 'Kích hoạt bảo hành',
              to: '/pages/kich-hoat-bao-hanh/0',
            },
            {
              icon: 'mdi-format-list-bulleted',
              title: 'Quản lý phiếu bảo hành',
              to: '/pages/quan-ly-bao-hanh',
            },
            {
              icon: 'mdi-ballot-outline',
              title: 'Sản phẩm',
              class: '',
              id: 'product-valenta'
            },
            {
              icon: 'mdi-card-account-phone-outline',
              title: 'Liên hệ',
              class: '',
              id: 'contact-valenta'
            }
          ]
        } else {
          vm.items = [
            {
              icon: 'mdi-home',
              title: 'Trang chủ',
              class: 'home-tab'
            },
            {
              icon: 'mdi-credit-card-search-outline',
              title: 'Tra cứu bảo hành',
              to: '/',
            },
            {
              icon: 'mdi-login-variant',
              title: 'Đăng nhập',
              to: '/login',
            }
          ]
        }
      }
    },
    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
