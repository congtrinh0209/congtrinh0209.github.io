<template>
  <v-container
    id="products"
    fluid
    tag="section"
  >
    <v-row>
      <!-- Sơn nội thất -->
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          :style="breakpointName === 'lg' ? 'margin-top: 90px' : 'margin-top: 20px'"
          icon="mdi-dresser-outline"
          title="SƠN NỘI THẤT"
          class="px-5 py-3"
          color="warning"
          :value="totalItemNoiThat"
        >
            <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
              <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
                <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemNoiThat}}</span> sản phẩm
                </div>
                <span class="mr-auto pt-2" v-else>
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemNoiThat}}</span> sản phẩm
                </span>
                <v-btn color="success" class="mx-0" @click.stop="addProduct('add', 'noithatProduct')">
                  <v-icon left size="22">
                    mdi-plus
                  </v-icon>
                  Thêm sản phẩm
                </v-btn>
              </div>
              <v-data-table
                :headers="headers"
                :items="listNoiThat"
                :page.sync="pageNoiThat"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1"
                @page-count="pageCountNoiThat = $event"
                no-data-text="Không có sản phẩm nào"
                :loading="loadingDataNoiThat"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="addProduct('update', 'noithatProduct', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>Sửa</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="deleteProduct('noithatProduct', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Xóa</span>
                  </v-tooltip>
                </template>
              
              </v-data-table>
              <div class="text-center mt-4">
                <v-pagination
                  v-model="pageNoiThat"
                  :length="pageCountNoiThat"
                ></v-pagination>
              </div>
            </v-card-text>
        </base-material-card>
      </v-col>
      <!-- Sơn ngoại thất -->
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          :style="breakpointName === 'lg' ? 'margin-top: 90px' : 'margin-top: 20px'"
          icon="mdi-dresser-outline"
          title="SƠN NGOẠITHẤT"
          class="px-5 py-3"
          color="success"
          :value="totalItemNgoaiThat"
        >
            <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
              <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
                <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemNgoaiThat}}</span> sản phẩm
                </div>
                <span class="mr-auto pt-2" v-else>
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemNgoaiThat}}</span> sản phẩm
                </span>
                <v-btn color="success" class="mx-0" @click.stop="addProduct('add', 'ngoaithatProduct')">
                  <v-icon left size="22">
                    mdi-plus
                  </v-icon>
                  Thêm sản phẩm
                </v-btn>
              </div>
              <v-data-table
                :headers="headers"
                :items="listNgoaiThat"
                :page.sync="pageNgoaiThat"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1"
                @page-count="pageCountNgoaiThat = $event"
                no-data-text="Không có sản phẩm nào"
                :loading="loadingDataNgoaiThat"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="addProduct('update', 'ngoaithatProduct', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>Sửa</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="deleteProduct('ngoaithatProduct', item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Xóa</span>
                  </v-tooltip>
                </template>
              
              </v-data-table>
              <div class="text-center mt-4">
                <v-pagination
                  v-model="pageNgoaiThat"
                  :length="pageCountNgoaiThat"
                ></v-pagination>
              </div>
            </v-card-text>
        </base-material-card>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Users',

    data () {
      return {
        loading: false,
        loadingDataNoiThat: false,
        loadingDataNgoaiThat: false,
        dialogAddProduct: false,
        totalItemNoiThat: 0,
        pageNoiThat: 1,
        pageCountNoiThat: 0,
        listNoiThat: [],

        totalItemNgoaiThat: 0,
        pageNgoaiThat: 1,
        pageCountNgoaiThat: 0,
        listNgoaiThat: [],

        totalItemLotKhangKiem: 0,
        pageLotKhangKiem: 1,
        pageCountLotKhangKiem: 0,
        listLotKhangKiem: [],

        totalItemChongTham: 0,
        pageChongTham: 1,
        pageChongTham: 0,
        listChongTham: [],

        itemsPerPage: 5,
        typeAction: '',
        productUpdate: '',
        
        validFormAdd: true,
        productName: '',
        nameRules: [
          v => !!v || 'Tên sản phẩm là bắt buộc',
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
            text: 'Tên sản phẩm',
            align: 'center',
            value: 'productName'
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
      vm.getListNoiThat()
      vm.getListNgoaiThat()
    },
    methods: {
      getListNoiThat () {
        let vm = this
        vm.loadingDataNoiThat = true
        db.collection("noithatProduct").get().then(function(querySnapshot) {
          vm.loadingDataNoiThat = false
          let noithatProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              noithatProduct.push(item.data())
            })
            vm.listNoiThat = noithatProduct
            vm.totalItemNoiThat = querySnapshot.size
            vm.pageCountNoiThat = Math.ceil(querySnapshot.size / vm.itemsPerPage)
          } else {
            vm.listNoiThat = []
          }
        }).catch(function () {
          vm.loadingDataNoiThat = false
        })
      },
      getListNgoaiThat () {
        let vm = this
        vm.loadingDataNgoaiThat = true
        db.collection("ngoaithatProduct").get().then(function(querySnapshot) {
          vm.loadingDataNgoaiThat = false
          let ngoaithatProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              ngoaithatProduct.push(item.data())
            })
            vm.listNgoaiThat = ngoaithatProduct
            vm.totalItemNgoaiThat = querySnapshot.size
            vm.pageCountNgoaiThat = Math.ceil(querySnapshot.size / vm.itemsPerPage)
          } else {
            vm.listNgoaiThat = []
          }
        }).catch(function () {
          vm.loadingDataNgoaiThat = false
        })
      },
      addProduct (typeAction, productType, item) {
        let vm = this
        vm.typeAction = type
        vm.productUpdate = user
        vm.dialogAddProduct = true
        if (type === 'add') {
          setTimeout(function () {
            vm.account = ''
            vm.passWord = ''
            vm.productName = ''
            vm.telNo = ''
            vm.address = ''
            vm.$refs.formAddMember.resetValidation()
          }, 200)
        } else {
          setTimeout(function () {
            vm.account = user.account
            vm.productName = user.productName
            vm.telNo = user.telNo
            vm.address = user.address
            vm.$refs.formAddMember.resetValidation()
          }, 200)
        }
        
      },
      updateStatusUser (type, user) {
        let vm = this
        vm.productUpdate = user
      },
      deleteProduct (productType, item) {
        let vm = this
      },
      submitAddMember () {
        let vm = this
        if (vm.$refs.formAddMember.validate()) {
          if (vm.typeAction === 'add') {
            let dataUserAuthen = {
              account: String(vm.account).trim() + '@gmail.com',
              passWord: String(vm.passWord).trim(),
              productName: String(vm.productName).trim(),
              telNo: String(vm.telNo).trim(),
              address: String(vm.address).trim()
            }
            vm.loading = true
            db.collection("users").doc(user.uid).set({
              account: String(vm.account).trim(),
              productName: dataUserAuthen.productName,
              telNo: dataUserAuthen.telNo,
              address: dataUserAuthen.address,
              role: "Member",
              status: "",
              uid: user.uid
            })
            .then(() => {
              vm.loading = false
              vm.$store.commit('SHOW_SNACKBAR', {
                show: true,
                text: 'Thêm sản phẩm thành công',
                color: 'success',
              })
              vm.getMembers()
            })
            .catch((error) => {
            })
            
          }
          
        }
      },
      cancelAddMember () {
        let vm = this
        vm.dialogAddProduct = false
      },
    },
  }
</script>
<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
  main {
    padding-top: 75px !important;
  }
</style>
