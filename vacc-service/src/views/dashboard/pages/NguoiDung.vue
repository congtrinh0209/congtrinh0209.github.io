<template>
  <div v-if="userLogin['role_name'] === 'admin'">
    <v-container
      id="users"
      fluid
      tag="section"
      :style="breakpointName === 'xs' || breakpointName === 'sm' ? 'padding-top: 75px' : ''"
    >
      <base-material-card
        style="margin-top: 20px"
        icon="mdi-clipboard-text"
        title="Danh sách người dùng"
        class="px-5 py-3"
      >
          <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
            <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
              <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
                Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> người dùng
              </div>
              <span class="mr-auto pt-2" v-else>
                Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> người dùng
              </span>
              <v-btn color="#0072bc" class="mx-0" @click.stop="addMember('add')">
                <v-icon left size="22">
                  mdi-plus
                </v-icon>
                Thêm người dùng
              </v-btn>
            </div>
            <v-data-table
              :headers="headers"
              :items="items"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
              no-data-text="Không có"
              :loading="loadingData"
              loading-text="Đang tải... "
            >
            <template v-slot:item.index="{ item, index }">
              <span>{{ index + 1 }}</span>
            </template>
            <template v-slot:item.QuanTriHeThong="{ item }">
              <span style="color: red" v-if="item.QuanTriHeThong">Quản trị</span>
              <span style="color: blue" v-else>Cán bộ</span>
            </template>
            <template v-slot:item.action="{ item }">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="addMember('update', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                    <v-icon size="22">mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Cập nhật thông tin</span>
              </v-tooltip>
              <v-tooltip top v-if="item['role'] === 'Member' && !item['status']">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="updateStatusUser('block', item)" color="orange" text icon class="" v-bind="attrs" v-on="on">
                    <v-icon size="22">mdi-lock-check</v-icon>
                  </v-btn>
                </template>
                <span>Khóa tài khoản</span>
              </v-tooltip>
              <v-tooltip top v-if="item['role'] === 'Member' && item['status'] === 'block'">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="updateStatusUser('open', item)" color="green" text icon class="" v-bind="attrs" v-on="on">
                    <v-icon size="22">mdi-lock-open-variant-outline</v-icon>
                  </v-btn>
                </template>
                <span>Mở khóa tài khoản</span>
              </v-tooltip>
              <v-tooltip top v-if="item['role'] === 'Member'">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="deleteUser(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                    <v-icon size="22">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Xóa người dùng</span>
              </v-tooltip>
            </template>
            
            </v-data-table>
            <div class="text-center mt-4">
              <v-pagination
                v-model="page"
                :length="pageCount"
              ></v-pagination>
            </div>
          </v-card-text>
      </base-material-card>
      <v-dialog
        max-width="700"
        v-model="dialogAddMember"
      >
        <v-card>
          <v-toolbar
            dark
            color="#0072bc"
          >
            <v-toolbar-title v-if="typeAction === 'add'">Thêm người dùng</v-toolbar-title>
            <v-toolbar-title v-else>Cập nhật thông tin</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                dark
                @click="dialogAddMember = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="mt-5">
            <v-form
              ref="formAddMember"
              v-model="validFormAdd"
              lazy-validation
            >
                <v-layout wrap>
                    <v-text-field
                        class="flex xs12 md6"
                        v-if="typeAction === 'add'"
                        v-model="userInfo.TenDangNhap"
                        :rules="accountRules"
                        required
                        outlined
                        label="Tên đăng nhập"
                        prepend-inner-icon="mdi-account-check-outline"
                        dense
                        clearable
                    ></v-text-field>

                    <v-text-field
                        class="flex xs12 md6 pl-2"
                        v-if="typeAction === 'add'"
                        v-model="userInfo.MatKhau"
                        :rules="passwordRules"
                        required
                        outlined
                        label="Mật khẩu đăng nhập"
                        prepend-inner-icon="mdi-lock-check-outline"
                        dense
                        clearable
                    ></v-text-field>

                    <v-text-field
                        class="flex xs12 md6"
                        v-model="userInfo.HoVaTen"
                        :rules="nameRules"
                        required
                        outlined
                        label="Tên người dùng"
                        prepend-inner-icon="mdi-card-account-details-outline"
                        dense
                        clearable
                    ></v-text-field>
                    <v-text-field
                        class="flex xs12 md6 pl-2"
                        v-model="userInfo.ChucDanh"
                        :rules="nameRules"
                        required
                        outlined
                        label="Chức danh"
                        prepend-inner-icon="mdi-card-account-details-outline"
                        dense
                        clearable
                    ></v-text-field>
                    <v-text-field
                        class="flex xs12 md6"
                        v-model="userInfo.SoDienThoai"
                        :rules="telNoRules"
                        required
                        outlined
                        label="Số điện thoại"
                        prepend-inner-icon="mdi-phone-in-talk-outline"
                        dense
                        clearable
                    ></v-text-field>

                    <v-text-field
                        class="flex xs12 md6 pl-2"
                        v-model="userInfo.Email"
                        outlined
                        label="Email"
                        prepend-inner-icon="mdi-card-account-details-outline"
                        dense
                        clearable
                    ></v-text-field>

                    <v-autocomplete
                        class="flex xs12 md12"
                        hide-no-data
                        :items="listDiaBan"
                        v-model="userInfo['DiaBanCoSo_ID']"
                        item-text="itemName"
                        item-value="itemCode"
                        clearable
                        outlined
                        label="Địa bàn cơ sở quản lý"
                        dense
                        prepend-inner-icon="mdi-map-marker"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="flex xs12 md12"
                        hide-no-data
                        :items="listCoSoYTe"
                        v-model="userInfo['CoSoYTe_ID']"
                        item-text="itemName"
                        item-value="itemCode"
                        clearable
                        :rules="required"
                        required
                        outlined
                        label="Cơ sở y tế quản lý"
                        dense
                        prepend-inner-icon="mdi-map-marker"
                    ></v-autocomplete>
                    <v-checkbox
                        v-model="userInfo['QuanTriHeThong']"
                        label="QUẢN TRỊ HỆ THỐNG"
                        color="indigo darken-3"
                        hide-details
                        ></v-checkbox>
                </v-layout>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            
            <v-btn color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="cancelAddMember">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
            <v-btn class="mr-2" color="#0072bc" :loading="loading" :disabled="loading" @click="submitAddMember">
              <v-icon left>
                mdi-content-save
              </v-icon>
              <span v-if="typeAction === 'add'">Thêm mới</span>
              <span v-else>Cập nhật</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
    
  </div>
  
</template>

<script>
  export default {
    name: 'Users',

    data () {
      return {
        loading: false,
        loadingData: false,
        dialogAddMember: false,
        userInfo: {
          TenDangNhap: '',
          HoVaTen: '',
          ChucDanh: '',
          SoDienThoai: '',
          Email: '',
          MatKhau: '',
          DiaBanCoSo_ID: '',
          CoSoYTe_ID: '',
          QuanTriHeThong: false,
          KhoaTaiKhoan: false
        },
        totalItem: 0,
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        typeAction: '',
        userUpdate: '',
        items: [],
        validFormAdd: true,
        userName: '',
        nameRules: [
          v => !!v || 'Tên người dùng là bắt buộc',
          v => (v && v.length <= 100) || 'Tên không quá 100 ký tự',
        ],
        account: '',
        accountRules: [
          v => !!v || 'Tên đăng nhập là bắt buộc',
          v => /^[a-zA-Z0-9]+$/.test(v) || 'Tên đăng nhập gồm chữ hoặc số',
          v => (v && v.length <= 75) || 'Tên đăng nhập không quá 75 ký tự',
        ],
        passWord: '',
        passwordRules: [
          v => !!v || 'Mật khẩu đăng nhập là bắt buộc',
          v => (v && v.length >= 6 && v.length <= 75) || 'Mật khẩu ít nhất 6 ký tự',
        ],
        telNo: '',
        telNoRules: [
          v => !!v || 'Số điện thoại là bắt buộc',
          v => /^0([1-9]{1}\d{8})$/.test(v) || 'Số điện thoại gồm 10 chữ số',
        ],
        address: '',
        addressRules: [
          v => (v && v.length <= 200) || 'Địa chỉ không quá 200 ký tự',
        ],
        headers: [
          {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
          },
          {
            sortable: false,
            text: 'Họ và tên',
            align: 'center',
            value: 'HoVaTen'
          },
          {
            sortable: false,
            text: 'Tên đăng nhập',
            value: 'TenDangNhap'
          },
          {
            sortable: false,
            text: 'Số điện thoại',
            align: 'center',
            value: 'SoDienThoai'
          },
          {
            sortable: false,
            text: 'Chức danh',
            align: 'center',
            value: 'ChucDanh'
          },
          {
            sortable: false,
            text: 'Loại tài khoản',
            align: 'center',
            value: 'QuanTriHeThong'
          },
          {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
            value: 'action'
          },
        ],
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 3)
      vm.getMembers()
      vm.getDiaBanCoSo()
      vm.getCoSoYTe()
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      }
    },
    methods: {
      getDiaBanCoSo () {
        let vm = this
        let filter = {
        }
        vm.$store.dispatch('getDiaBanCoSo', filter).then(function (result) {
          vm.listDiaBan = result.hasOwnProperty('data') ? result.data : []
        })
      },
      getCoSoYTe () {
        let vm = this
        let filter = {
        }
        vm.$store.dispatch('getCoSoYTe', filter).then(function (result) {
          vm.listCoSoYTe = result.hasOwnProperty('data') ? result.data : []
        })
      },
      getMembers () {
        let vm = this
        vm.loadingData = true
        let filter = {
          page: 1,
          size: 30
        }
        vm.$store.dispatch('getNguoiDung', filter).then(function (result) {
          vm.loadingData = false
          if (result) {
            vm.items = result.hasOwnProperty('data') ? result.data : []
            vm.totalItem = result.hasOwnProperty('total') ? result.total : []
            vm.pageCount = Math.ceil(vm.totalItem / vm.itemsPerPage)
          } else {
            vm.items = []
          }
        })
      },
      addMember (type, user) {
        let vm = this
        vm.typeAction = type
        vm.userUpdate = user
        vm.dialogAddMember = true
        if (type === 'add') {
          setTimeout(function () {
            vm.$refs.formAddMember.reset()
            vm.$refs.formAddMember.resetValidation()
          }, 200)
        } else {
          setTimeout(function () {
            vm.userInfo = user
            vm.$refs.formAddMember.resetValidation()
          }, 200)
        }
        
      },
      updateStatusUser (type, user) {
        let vm = this
        vm.userUpdate = user
      },
      deleteUser (user) {
        let vm = this
      },
      submitAddMember () {
        let vm = this
        if (vm.$refs.formAddMember.validate()) {
          if (vm.typeAction === 'add') {
            let filter = vm.userInfo
            vm.loading = true
            vm.$store.dispatch('createNguoiDung', filter).then(userCredential => {
              vm.loading = false
              vm.dialogAddMember = false
              vm.$store.commit('SHOW_SNACKBAR', {
                show: true,
                text: 'Thêm người dùng thành công',
                color: 'success',
              })
              vm.getMembers()
            })
            .catch((error) => {
              vm.loading = false
              let errorCode = error.code;
              let errorMessage = error.message;
              let mess = ''
              if (errorCode == 'auth/email-already-in-use') {
                mess = 'Tên đăng nhập đã được sử dụng. Vui lòng sử dụng tên đăng nhập khác.'
              } else if (errorCode == 'auth/weak-password') {
                mess = 'Mật khẩu quá yếu'
              } else if (errorCode == 'auth/invalid-email') {
                mess = 'Tên đăng nhập không hợp lệ'
              } else {
                mess = errorMessage
              }
              vm.$store.commit('SHOW_SNACKBAR', {
                show: true,
                text: mess,
                color: 'error',
              })
              // ..
            });
          } else {
            let filter = {
              id: '',
              data: vm.userInfo
            }
            vm.loading = true
            vm.$store.dispatch('updateNguoiDung', filter).then(function () {
              vm.loading = false
              vm.$store.commit('SHOW_SNACKBAR', {
                show: true,
                text: 'Cập nhật thành công',
                color: 'success',
              })
              vm.dialogAddMember = false
              vm.getMembers()
            }).catch(function () {
              vm.$store.commit('SHOW_SNACKBAR', {
                show: true,
                text: 'Cập nhật thất bại',
                color: 'error',
              })
            })
          }
          
        }
      },
      cancelAddMember () {
        let vm = this
        vm.dialogAddMember = false
      },
    },
  }
</script>
<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
</style>

