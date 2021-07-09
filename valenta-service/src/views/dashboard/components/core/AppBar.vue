<template>
<div>
  <v-app-bar
    v-if="breakpointName === 'xs' || breakpointName === 'sm'"
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text=""
    />

    <v-spacer />

    <div class="mx-3" />
    

    <v-menu v-if="userLogin && userLogin !== 'guest'" offset-y origin="center center" transition="scale-transition">
      <template #activator="{ on }">
        <v-btn slot="activator" class="ml-2" min-width="0" text v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list class="pa-0">
        <v-list-item
          to="/pages/user"
          rel="noopener"
        >
          <v-list-item-action class="mr-3">
            <v-icon color="#3f51b5">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Thông tin tài khoản</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          @click="logout"
          rel="noopener"
        >
          <v-list-item-action class="mr-3">
            <v-icon color="red">mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Đăng xuất</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <div v-else id="header-desktop">
    <header id="banner">
        <div class="container"> 
          <a href="" class="mLogo"> <img src="/images/logo-valenta.png"> </a>
        </div>
        <v-menu v-if="userLogin && userLogin !== 'guest' &&  (breakpointName === 'xs' || breakpointName === 'sm')" offset-y origin="center center" transition="scale-transition">
          <template #activator="{ on }">
            <v-btn style="position: absolute;top:25px;right:30px" slot="activator" class="ml-2" min-width="0" text v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-0">
            <v-list-item
              to="/pages/user"
              rel="noopener"
            >
              <v-list-item-action class="mr-3">
                <v-icon color="#3f51b5">mdi-account</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Thông tin tài khoản</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              @click="logout"
              rel="noopener"
            >
              <v-list-item-action class="mr-3">
                <v-icon color="red">mdi-power</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Đăng xuất</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu v-if="userLogin && userLogin !== 'guest' && breakpointName !== 'xs' && breakpointName !== 'sm'" offset-y origin="center center" transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-chip
              style="height: 36px;position: absolute;top:25px;right:30px"
              v-bind="attrs"
              v-on="on"
              class="ma-2"
              color="primary"
              @click="showMenu = !showMenu"
            >
              <v-icon left size="24" class="mx-2">
                mdi-account-circle-outline
              </v-icon>
              {{userLogin['userName']}}
              <v-icon class="ml-2" v-if="!showMenu" size="20" color="white" >expand_more</v-icon>
              <v-icon class="ml-2" v-else size="20" color="white">expand_less</v-icon>
            </v-chip>
          </template>
          <v-list class="pa-0">
            <v-list-item
              to="/pages/user"
              rel="noopener"
            >
              <v-list-item-action class="mr-3">
                <v-icon color="#3f51b5">mdi-account</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Thông tin tài khoản</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              @click="logout"
              rel="noopener"
            >
              <v-list-item-action class="mr-3">
                <v-icon color="red">mdi-power</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Đăng xuất</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <div class="btns" v-if="!userLogin || userLogin == 'guest'"> 
          <a @click="goToLogin" href="javascript:;" class="login">Đăng nhập</a> 
        </div>
    </header>
    <nav class="sort-pages modify-pages" id="navigation"> 
        <ul aria-label="Site Pages" role="menubar" class="container">
            <li v-for="(item, i) in items" :key="i" :class="indexTab == i ? 'selected' : ''" :id="'layout_'+i" role="presentation">
              <a v-if="item.hasOwnProperty('to')" @click="redirectTo(item, i)" :class="item['class']" :id="item['id']" :aria-labelledby="'layout_'+i" aria-haspopup="true"  href="javascript:;" role="menuitem">
                <span> {{item.title}}</span>
              </a>
              <a v-else :class="item['class']" :id="item['id']" :aria-labelledby="'layout_'+i" aria-haspopup="true"  href="" role="menuitem">
                <span> {{item.title}}</span>
              </a>
            </li>
        </ul>
    </nav>
  </div>
  
</div>
</template>

<script>
  // Components
  import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',

    components: {
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      showMenu: fasle,
      items: [],
      indexTab: '',
      notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one',
      ],
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
            id: 'search'
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
            id: 'search'
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
            icon: 'mdi-ballot-outline',
            title: 'Công cụ hỗ trợ',
            class: '',
            id: 'tool-valenta'
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
            id: 'search'
          },
          {
            icon: 'mdi-ballot-outline',
            title: 'Sản phẩm',
            class: '',
            id: 'product-valenta'
          },
          {
            icon: 'mdi-ballot-outline',
            title: 'Công cụ hỗ trợ',
            class: '',
            id: 'tool-valenta'
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
      let index = vm.items.findIndex(function (item) {
        return item.id === 'search'
      })
      vm.indexTab = index
    },
    mounted () {
      let vm = this
      setTimeout(function () {
        document.getElementById('home-valenta').href = 'http://valenta.vn'
        document.getElementById('product-valenta').href = 'http://valenta.vn/product.html'
        document.getElementById('contact-valenta').href = 'http://valenta.vn/contact.html'
        document.getElementById('tool-valenta').href = 'http://valenta.vn/tinge.html'
      }, 2000)
    },
    computed: {
      ...mapState(['drawer']),
      userLogin () {
        return this.$store.getters.getPermistion
      },
      breakpointName () {
        return this.$store.getters.getBreakpointName
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
              class: 'home-tab',
              id: 'home-valenta'
            },
            {
              icon: 'mdi-credit-card-search-outline',
              title: 'Tra cứu bảo hành',
              to: '/',
              id: 'search'
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
              class: 'home-tab',
              id: 'home-valenta'
            },
            {
              icon: 'mdi-credit-card-search-outline',
              title: 'Tra cứu bảo hành',
              to: '/',
              id: 'search'
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
              icon: 'mdi-ballot-outline',
              title: 'Công cụ hỗ trợ',
              class: '',
              id: 'tool-valenta'
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
              id: 'search'
            },
            {
              icon: 'mdi-ballot-outline',
              title: 'Sản phẩm',
              class: '',
              id: 'product-valenta'
            },
            {
              icon: 'mdi-ballot-outline',
              title: 'Công cụ hỗ trợ',
              class: '',
              id: 'tool-valenta'
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
        setTimeout(function () {
          document.getElementById('home-valenta').href = 'http://valenta.vn'
          document.getElementById('product-valenta').href = 'http://valenta.vn/product.html'
          document.getElementById('contact-valenta').href = 'http://valenta.vn/contact.html'
          document.getElementById('tool-valenta').href = 'http://valenta.vn/tinge.html'
          
        }, 2000)
        let index = vm.items.findIndex(function (item) {
          return item.id === 'search'
        })
        vm.indexTab = index
      }
    },
    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      logout () {
        this.$store
          .dispatch('logout')
          .then(() => {
            window.location.href = window.location.origin
          })
          .catch(() => {
            this.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: 'Lỗi đăng xuất hệ thống',
              color: 'error',
            })
          })
      },
      redirectTo (item, index) {
        this.indexTab = index
        this.$router.push({ path: item.to })
      },
      goToLogin () {
        this.$router.push({ path: '/login' })
      }
    },
  }
</script>
<style lang="css">
  #header-desktop #banner {
      background: url(https://motcua.haugiang.gov.vn/o/hau-giang-theme/images/bg-header-1920.png) left center no-repeat;
      background-size: auto 100%;
      padding: 0;
  }
  #header-desktop #navigation {
      background-color: #fd6c1d;
      position: relative;
  }
  #header-desktop #banner .container, #header-desktop #navigation .container {
      padding-left: 0;
      padding-right: 0;
      max-width: 1300px;
      margin: auto;
  }
  #header-desktop #navigation ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      overflow: hidden;
      margin: auto;
      padding: 0;
  }
  #header-desktop #navigation ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      overflow: hidden;
      margin: auto;
      padding: 0;
  }
  #header-desktop #navigation li.selected a {
      font-weight: bold;
  }
  #header-desktop #navigation li:hover a, #header-desktop #navigation li.selected a {
      color: #fff;
  }
  #header-desktop #navigation li a {
      padding: 10px 15px;
      display: block;
      position: relative;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
  }
  #header-desktop #navigation li:hover a:before, #header-desktop #navigation li.selected a:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #fff;
  }
  #header-desktop #banner .btns {
    position: absolute;
    top: 10px;
    right: 30px;
  }
  #header-desktop #banner .btns a.login {
    background-image: url(/images/icon-login-blue.png);
  }
  #header-desktop #banner .btns a {
    display: inline-block;
    background-color: white;
    padding: 6px 50px 6px 20px;
    color: #0072bc;
    border: 2px solid #0072bc;
    border-radius: 50px;
    background-repeat: no-repeat;
    background-position: right -2px top -2px;
    background-size: auto 35px;
  }
</style>

