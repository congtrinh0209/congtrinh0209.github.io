<template>
  <div>
    <v-container
      id="users"
      fluid
      tag="section"
    >
      <base-material-card
        style="margin-top: 90px"
        icon="mdi-clipboard-text"
        title="Danh sách thành viên"
        class="px-5 py-3"
      >
          <v-card-text>
            <div class="d-flex mb-3">
              <span class="mr-auto pt-2">
                Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> thành viên
              </span>
              <v-btn color="success" class="" @click.stop="addMember('add')">
                <v-icon left>
                  mdi-plus
                </v-icon>
                Thêm thành viên
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
              no-data-text="Không có thành viên nào"
            >
            <template v-slot:item="{ item, index }">
              <tr>
                <td>
                  <div>
                    <span>{{ index + 1 }}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{{item.userName}}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{{item.account}}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{{item.telNo}}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{{item.address}}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span style="color: red" v-if="item.hasOwnProperty('role') && item.role === 'Admin'">Quản trị</span>
                    <span style="color: blue" v-else>Thành viên</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span style="color: red" v-if="item.hasOwnProperty('status') && item.status === 'block'">Đang bị khóa</span>
                    <span style="color: blue" v-else>Đang hoạt động</span>
                  </div>
                </td>
                <td>
                  <div>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="addMember('update', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                          <v-icon size="22">mdi-pencil</v-icon>
                        </v-btn>
                      </template>
                      <span>Sửa thông tin</span>
                    </v-tooltip>
                    <v-tooltip top v-if="item['role'] !== 'Admin' && !item['status']">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="updateStatusUser('block', item)" color="orange" text icon class="" v-bind="attrs" v-on="on">
                          <v-icon size="22">mdi-account-lock-outline</v-icon>
                        </v-btn>
                      </template>
                      <span>Khóa tài khoản</span>
                    </v-tooltip>
                    <v-tooltip top v-if="item.hasOwnProperty('role') && item['role'] === 'Member'">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="updateStatusUser('open', item)" color="green" text icon class="" v-bind="attrs" v-on="on">
                          <v-icon size="22">mdi-account-lock-outline</v-icon>
                        </v-btn>
                      </template>
                      <span>Mở khóa tài khoản</span>
                    </v-tooltip>
                    <v-tooltip top v-if="item.hasOwnProperty('role') && item['role'] === 'Member'">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="deleteUser(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                          <v-icon size="22">mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <span>Xóa thành viên</span>
                    </v-tooltip>

                  </div>
                </td>
              </tr>
            </v-data-table>
            <div class="text-center pt-2">
              <v-pagination
                v-model="page"
                :length="pageCount"
              ></v-pagination>
            </div>
          </v-card-text>
      </base-material-card>
      <v-dialog
        max-width="600"
        v-model="dialogAddMember"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>Thêm thành viên hệ thống</v-toolbar-title>
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
              <v-text-field
                v-model="account"
                :rules="accountRules"
                :counter="75"
                required
                outlined
                label="Tên đăng nhập"
                prepend-inner-icon="mdi-account-check-outline"
                dense
                clearable
                :readonly="typeAction === 'update'"
              ></v-text-field>

              <v-text-field
                v-if="typeAction === 'add'"
                v-model="passWord"
                :rules="passwordRules"
                required
                outlined
                label="Mật khẩu đăng nhập"
                prepend-inner-icon="mdi-lock-check-outline"
                dense
                clearable
              ></v-text-field>

              <v-text-field
                v-model="userName"
                :rules="nameRules"
                required
                outlined
                :counter="100"
                label="Tên thành viên"
                prepend-inner-icon="mdi-card-account-details-outline"
                dense
                clearable
              ></v-text-field>
              <v-text-field
                v-model="telNo"
                :rules="telNoRules"
                required
                outlined
                label="Số điện thoại"
                prepend-inner-icon="mdi-phone-in-talk-outline"
                dense
                clearable
              ></v-text-field>

              <v-text-field
                v-model="address"
                :rules="addressRules"
                :counter="200"
                outlined
                label="Địa chỉ"
                prepend-inner-icon="mdi-map-marker"
                dense
                clearable
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            
            <v-btn color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="cancelAddMember">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
            <v-btn class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitAddMember">
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
        dialogAddMember: false,
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
          v => !!v || 'Tên thành viên là bắt buộc',
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
          v => (v && v.length >= 6 && v.length <= 20) || 'Mật khẩu ít nhất 6 ký tự',
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
            text: 'Tên',
            value: 'userName'
          },
          {
            sortable: false,
            text: 'Tên đăng nhập',
            value: 'account'
          },
          {
            sortable: false,
            text: 'Số điện thoại',
            align: 'left',
            value: 'telNo'
          },
          {
            sortable: false,
            text: 'Địa chỉ',
            align: 'left',
            value: 'address'
          },
          {
            sortable: false,
            text: 'Loại tài khoản',
            align: 'left',
            value: 'role'
          },
          {
            sortable: false,
            text: 'Trạng thái',
            align: 'left',
            value: 'status'
          },
          {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
          },
        ],
      }
    },
    created () {
      let vm = this
      vm.getMembers()
    },
    methods: {
      getMembers () {
        let vm = this
        db.collection("users").get().then(function(querySnapshot) {
          let users = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              users.push(item.data())
            })
            vm.items = users
            console.log('memberList', vm.items)
            vm.totalItem = querySnapshot.size
            vm.pageCount = Math.ceil(querySnapshot.size / vm.itemsPerPage)
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
              text: 'Thêm thành viên thành công',
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
                role: "Member"
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
        }
      },
      cancelAddMember () {
        let vm = this
        vm.dialogAddMember = false
      },
    },
  }
</script>

