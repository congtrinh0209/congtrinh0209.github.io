<template>
  <div>
    <v-container
      id="users"
      fluid
      tag="section"
      :style="breakpointName === 'xs' || breakpointName === 'sm' ? 'padding-top: 75px' : ''"
    >
      <base-material-card
        style="margin-top: 20px"
        icon="mdi-clipboard-text"
        title="Danh sách cơ sở y tế"
        class="px-5 py-3"
      >
          <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
            <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
              <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
                Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> cơ sở y tế
              </div>
              <span class="mr-auto pt-2" v-else>
                Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> cơ sở y tế
              </span>
              <v-btn color="#0072bc" class="mx-0" @click.stop="addMember('add')">
                <v-icon left size="22">
                  mdi-plus
                </v-icon>
                Thêm cơ sở y tế
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
            <template v-slot:item.action="{ item }">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="addMember('update', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                    <v-icon size="22">mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Sửa</span>
              </v-tooltip>
              <v-tooltip top v-if="item['role'] === 'Member'">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="deleteUser(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                    <v-icon size="22">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Xóa</span>
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
            <v-toolbar-title v-if="typeAction === 'add'">Thêm cơ sở y tế</v-toolbar-title>
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
                        v-model="thongTinCoSo.MaCoSo"
                        outlined
                        label="Mã cơ sở"
                        prepend-inner-icon="mdi-account-check-outline"
                        dense
                        clearable
                    ></v-text-field>
                    <v-text-field
                        class="flex xs12 md6 pl-2"
                        v-model="thongTinCoSo.TenCoSo"
                        outlined
                        label="Tên cơ sở"
                        prepend-inner-icon="mdi-account-check-outline"
                        dense
                        clearable
                    ></v-text-field>
                    <v-text-field
                        class="flex xs12 md12"
                        v-model="thongTinCoSo.DiaChiCoSo"
                        outlined
                        label="Địa chỉ cơ sở"
                        prepend-inner-icon="mdi-account-check-outline"
                        dense
                        clearable
                    ></v-text-field>
                    <v-autocomplete
                        class="flex xs12 md4"
                        hide-no-data
                        :items="listTinhThanh"
                        v-model="tinhThanh"
                        item-text="itemName"
                        item-value="itemCode"
                        clearable
                        :rules="required"
                        required
                        outlined
                        label="Tỉnh/ Thành phố"
                        dense
                    ></v-autocomplete>
                    <v-autocomplete
                        class="flex xs12 md4 pl-2"
                        hide-no-data
                        :items="listQuanHuyen"
                        v-model="quanHuyen"
                        item-text="itemName"
                        item-value="itemCode"
                        clearable
                        :rules="required"
                        required
                        outlined
                        label="Quận/ Huyện"
                        dense
                    ></v-autocomplete>
                    <v-autocomplete
                        class="flex xs12 md4 pl-2"
                        hide-no-data
                        :items="listXaPhuong"
                        v-model="xaPhuong"
                        item-text="itemName"
                        item-value="itemCode"
                        clearable
                        :rules="required"
                        required
                        outlined
                        label="Phường/ Xã"
                        dense
                    ></v-autocomplete>
                    <v-text-field
                        class="flex xs12 md6"
                        v-model="thongTinCoSo.NguoiDaiDien"
                        outlined
                        label="Người đại diện"
                        prepend-inner-icon="mdi-account-check-outline"
                        dense
                        clearable
                    ></v-text-field>
                    <v-text-field
                        class="flex xs12 md6 pl-2"
                        v-model="thongTinCoSo.SoDienThoai"
                        outlined
                        label="Số điện thoại"
                        prepend-inner-icon="mdi-account-check-outline"
                        dense
                        clearable
                    ></v-text-field>
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
        thongTinCoSo: {
            MaCoSo: '',
            TenCoSo: '',
            TinhThanh_Ma: '',
            TinhThanh_Ten: '',
            QuanHuyen_Ma: '',
            QuanHuyen_Ten: '',
            PhuongXa_Ma: '',
            PhuongXa_Ten: '',
            DiaChiCoSo: '',
            NguoiDaiDien: '',
            SoDienThoai: ''
        },
        listTinhThanh: [],
        tinhThanh: '',
        listQuanHuyen: [],
        quanHuyen: '',
        listXaPhuong: [],
        xaPhuong: '',
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
          v => !!v || 'Tên địa bàn là bắt buộc'
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
            text: 'Mã cơ sơ',
            align: 'center',
            value: 'MaCoSo'
          },
          {
            sortable: false,
            text: 'Tên cơ sở',
            align: 'center',
            value: 'TenCoSo'
          },
          {
            sortable: false,
            text: 'Địa chỉ cơ sở',
            align: 'center',
            value: 'DiaChiCoSo'
          },
          {
            sortable: false,
            text: 'Tỉnh/ thành phố',
            value: 'TinhThanh_Ten'
          },
          {
            sortable: false,
            text: 'Quận/ huyện',
            align: 'center',
            value: 'QuanHuyen_Ten'
          },
          {
            sortable: false,
            text: 'Phường/ xã',
            align: 'center',
            value: 'PhuongXa_Ten'
          },
          {
            sortable: false,
            text: 'Người đại diện',
            align: 'center',
            value: 'NguoiDaiDien'
          },
          {
            sortable: false,
            text: 'Số điện thoại',
            align: 'center',
            value: 'Số điện thoại'
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
      vm.getDiaBanCoSo()
      vm.getTinhThanh()
    },
    watch: {
      tinhThanh (val) {
        this.thongTinCoSo.TinhThanh_Ma = val
        this.getQuanHuyen()
      },
      quanHuyen (val) {
        this.thongTinCoSo.QuanHuyen_Ma = val
        this.getXaPhuong()
      },
      xaPhuong (val) {
        this.thongTinCoSo.PhuongXa_Ma = val 
      },
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
      getTinhThanh () {
        let vm = this
        let filter = {
        }
        vm.$store.dispatch('getDanhMucTinhThanh', filter).then(function (result) {
          vm.listTinhThanh = result.hasOwnProperty('data') ? result.data : []
        })
      },
      getQuanHuyen () {
        let vm = this
      },
      getXaPhuong () {
        let vm = this
      },
      addMember (type, user) {
        let vm = this
        vm.typeAction = type
        vm.userUpdate = user
        vm.dialogAddMember = true
        if (type === 'add') {
          setTimeout(function () {
            vm.account = ''
            vm.passWord = ''
            vm.userName = ''
            vm.telNo = ''
            vm.address = ''
            vm.$refs.formAddMember.resetValidation()
          }, 200)
        } else {
          setTimeout(function () {
            vm.account = user.account
            vm.userName = user.userName
            vm.telNo = user.telNo
            vm.address = user.address
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
            let dataUserAuthen = {
              account: String(vm.account).trim() + '@gmail.com',
              passWord: String(vm.passWord).trim(),
              userName: String(vm.userName).trim(),
              telNo: String(vm.telNo).trim(),
              address: String(vm.address).trim()
            }
            vm.loading = true
            let curr = firebase.auth().currentUser
            let uidad = curr['uid']
            let infoad = db.collection("users").doc(uidad)
            let uss = curr['email']
            let ssap = ''
            infoad.get().then((doc) => {
              if (doc.exists) {
                ssap = window.atob(doc.data()['pid'])
              } else {
              }
            }).catch((error) => {
            })
            firebase.auth().createUserWithEmailAndPassword(dataUserAuthen.account, dataUserAuthen.passWord)
            .then(userCredential => {
              vm.loading = false
              vm.$store.commit('SHOW_SNACKBAR', {
                show: true,
                text: 'Thêm người dùng thành công',
                color: 'success',
              })
              // Signed in
              vm.dialogAddMember = false
              firebase.auth().signInWithEmailAndPassword(uss, ssap)
              .then(() => {
                let user = userCredential.user;
                db.collection("users").doc(user.uid).set({
                  account: String(vm.account).trim(),
                  userName: dataUserAuthen.userName,
                  telNo: dataUserAuthen.telNo,
                  address: dataUserAuthen.address,
                  role: "Member",
                  status: "",
                  pid: window.btoa(dataUserAuthen.passWord),
                  uid: user.uid
                })
                .then(() => {
                  vm.getMembers()
                })
                .catch((error) => {
                })
              })
              // ...
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
            vm.loading = true
            db.collection('users').doc(vm.userUpdate['uid']).update(
              {
                userName: vm.userName,
                telNo: vm.telNo,
                address: vm.address
              }
            ).then(function () {
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

