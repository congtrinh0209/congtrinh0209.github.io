<template>
  <div>
    <v-container
      id="regular-tables"
      fluid
      tag="section"
    >
      <base-material-card
        style="margin-top: 100px"
        icon="mdi-clipboard-text"
        title="Danh sách thành viên"
        class="px-5 py-3"
      >
          <v-card-text>
            <v-flex class="text-xs-right">
              <v-btn color="success">
                <v-icon left @click="addMember">
                  add
                </v-icon>
                Thêm thành viên
              </v-btn>
            </v-flex>
            <v-data-table
              :headers="headers"
              :items="items"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
            <template slot="items" slot-scope="props">
              <tr>
                <td>
                  <div>
                    <span>{{ props.index + 1 }}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{{props.item.name}}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{{props.item.email}}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{{props.item.telNo}}</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>{{props.item.lastLogin}}</span>
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
    </v-container>
    <v-dialog
      max-width="700"
      v-model="dialogAddMember"
    >
      <v-card>
        <v-toolbar
          color="primary"
          dark
        ></v-toolbar>
        <v-card-text>
          <v-form
            ref="formAddMember"
            v-model="validFormAdd"
            lazy-validation
          >
            <v-text-field
              v-model="userName"
              :rules="nameRules"
              required
              outlined
              :counter="100"
              label="Tên thành viên"
              prepend-inner-icon="account-circle-outline"
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              outlined
              label="Email đăng nhập"
              prepend-inner-icon="email"
            ></v-text-field>

            <v-text-field
              v-model="passWord"
              :rules="passwordRules"
              required
              outlined
              label="Mật khẩu đăng nhập"
              prepend-inner-icon="lock-check-outline"
            ></v-text-field>

            <v-text-field
              v-model="telNo"
              :rules="telNoRules"
              required
              outlined
              label="Số điện thoại"
              prepend-inner-icon="phone-in-talk-outline"
            ></v-text-field>

            <v-text-field
              v-model="address"
              :rules="addressRules"
              :counter="200"
              outlined
              label="Địa chỉ"
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          
          <v-btn color="red" class="white--text mr-2" :loading="loading" :disabled="loading">
            <v-icon left @click="cancelAddMember">
              clear
            </v-icon>
            Thoát
          </v-btn>
          <v-btn color="primary" :loading="loading" :disabled="loading">
            <v-icon left @click="submitAddMember">
              save
            </v-icon>
            Thêm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  
</template>

<script>
  export default {
    name: 'Users',

    data () {
      return {
        loading: false,
        dialogAddMember: false,
        page: 1,
        pageCount: 0,
        itemsPerPage: 2,
        headers: [
          {
            sortable: false,
            text: 'Tên',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Email',
            value: 'email',
          },
          {
            sortable: false,
            text: 'Số điện thoại',
            value: 'telNo',
            align: 'left',
          },
          {
            sortable: false,
            text: 'Địa chỉ',
            value: 'address',
            align: 'left',
          },
          {
            sortable: false,
            text: 'Đăng nhập gần nhất',
            value: '',
            align: 'center',
          },
        ],
        items: [
            {
                name: "Trịnh Công Trình",
                email: "congtrinh0209@gmail.com",
                telNo: "0868979193",
                address: "Yên Đồng - Ý Yên - Nam Định",
                lastLogin: "15/05/2020 17:05"
            },
            {
                name: "Trịnh Công Trình",
                email: "congtrinh0201@gmail.com",
                telNo: "0868979193",
                address: "Yên Đồng - Ý Yên - Nam Định",
                lastLogin: "15/05/2020 17:05"
            },
            {
                name: "Trịnh Công Trình",
                email: "congtrinh0203@gmail.com",
                telNo: "0868979193",
                address: "Yên Đồng - Ý Yên - Nam Định",
                lastLogin: "15/05/2020 17:05"
            },
            {
                name: "Trịnh Công Trình",
                email: "congtrinh0202@gmail.com",
                telNo: "0868979193",
                address: "Yên Đồng - Ý Yên - Nam Định",
                lastLogin: "15/05/2020 17:05"
            }
        ],
        validFormAdd: true,
        userName: '',
        nameRules: [
          v => !!v || 'Tên thành viên là bắt buộc',
          v => (v && v.length <= 100) || 'Tên không quá 100 ký tự',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail là bắt buộc',
          v => /.+@.+\..+/.test(v) || 'Sai định dạng email',
        ],
        passWord: '',
        passwordRules: [
          v => !!v || 'Mật khẩu đăng nhập là bắt buộc',
          v => (v && v.length >= 6 && v.length >= 20) || 'Mật khẩu ít nhất 6 ký tự',
        ],
        telNo: '',
        telNoRules: [
          v => !!v || 'Số điện thoại là bắt buộc',
          v => /^0([1-9]{1}\d{8})$/.test(v) || 'Số điện thoại gồm 10 chữ số',
        ],
        address: '',
        addressRules: [
          v => (v && v.length <= 200) || 'Tên không quá 200 ký tự',
        ],
      }
    },
    created () {
      let vm = this
      vm.pageCount = Math.ceil(vm.items.length / vm.itemsPerPage)
      
    },
    methods: {
      addMember () {
        let vm = this
        vm.dialogAddMember = true
        vm.$refs.formAddMember.reset()
        vm.$refs.formAddMember.resetValidation()
      },
      submitAddMember () {
        let vm = this
        if (vm.$refs.formAddMember.validate()) {

        }
      },
      cancelAddMember () {
        let vm = this
        vm.dialogAddMember = false
      },
    },
  }
</script>
<style>
  .v-data-table-header th {
    font-size: 14px !important;
    font-weight: bold !important;
  }
  section.container {
    min-height: calc(100vh - 150px) !important;
  }
</style>
